import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

type AuthType = {
    userId:null | number
    email: null | string
    login: null | string
    isAuth:boolean
}


let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth:true}
        }
        default:
            return state
    }
}


type ActionType = setUserDataType

type setUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId:number, email:string, login:string) => {
    return {
        type: "SET_USER_DATA",
        data:{
            userId,
            email,
            login
        }
    } as const
}

export const getAuthUser = () =>{
    return (dispatch:Dispatch<ActionType>) => {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email))
            }
        });
    }
}

