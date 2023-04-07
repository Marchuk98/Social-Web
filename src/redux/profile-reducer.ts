import {Dispatch} from "redux";
import { v1 } from "uuid";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"


export type ProfilePageType = {
    post: PostType[]
    newPostText: string
    profile:ProfileType | null
    status:string
}

export type ProfileType = {
    "aboutMe": string
    "contacts": ProfileContactType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}

type ProfileContactType = {
    "facebook": string,
    "website": string | null,
    "vk": string,
    "twitter": string,
    "instagram": string,
    "youtube": string | null,
    "github": string,
    "mainLink": string | null
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

let initialState: ProfilePageType = {
    post: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 32},
        {id: v1(), message: 'It\'s my first post', likesCount: 45},
        {id: v1(), message: 'Hybrid theory', likesCount: 23},
        {id: v1(), message: 'To be continued', likesCount: 75}
    ],
    newPostText: 'it-kamasutra.com',
    profile:null,
    status:''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":{
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,post:[...state.post, newPost]}
            }
        case "SET_USER_PROFILE":
            return {...state,profile:action.profile}
        case "SET_STATUS":
            return {...state,status:action.status}
        default :
            return state;
    }
}

type ActionType = addPostACType | setUserProfileAC | setStatusProfileType


export type addPostACType = ReturnType<typeof addPostAC>;

export const addPostAC = (newPostText:string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export type setUserProfileAC = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile:ProfileType) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }as const
}

export type setStatusProfileType = ReturnType<typeof setStatusProfile>

export const setStatusProfile = (status:string) => {
    return{
        type: SET_STATUS,
        status
    }as const
}

export const getProfile = (userId:string) =>{
    return (dispatch:Dispatch<ActionType>) => {
        profileAPI.getProfile(userId)
            .then(response => {
               dispatch(setUserProfile(response.data))
            });
    }
}

export const getStatus = (userId:string) => {
    return (dispatch:Dispatch<ActionType>) => {
        profileAPI.getStatus(userId)
            .then(response => dispatch(setStatusProfile(response.data)))
    }
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }}
        )
}


export default profileReducer;