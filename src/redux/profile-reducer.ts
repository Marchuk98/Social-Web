const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"

const updateNewPostText = "updateNewPostText";

export type ProfilePageType = {
    post: PostType[]
    newPostText: string
    profile:string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState: ProfilePageType = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 32},
        {id: 2, message: 'It\'s my first post', likesCount: 45},
        {id: 3, message: 'Hybrid theory', likesCount: 23},
        {id: 4, message: 'To be continued', likesCount: 75}
    ],
    newPostText: 'it-kamasutra.com',
    profile:''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypeAC) => {
    switch (action.type) {
        case "ADD-POST":
            let newPostText = state.newPostText;
            return {...state, newPostText: '', post:[...state.post, {id:state.post.length+1, message:newPostText,likesCount:state.post.length+1}]}
        case "updateNewPostText" :
            return {...state,newPostText:action.newText}
        case "SET_USER_PROFILE":
            return {...state,profile:action.profile}
        default :
            return state;
    }
}

type ActionTypeAC = addPostACType | UpdateNewPostAC | setUserProfileAC


export type addPostACType = ReturnType<typeof addPostAC>;

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export type UpdateNewPostAC = ReturnType<typeof UpdateNewPostAC>

export const UpdateNewPostAC = (newText: string) => {
    return {
        type: updateNewPostText,
        newText: newText
    } as const
}

export type setUserProfileAC = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile:string) => {
    return{
        type: SET_USER_PROFILE,
        profile
    }as const
}

export default profileReducer;