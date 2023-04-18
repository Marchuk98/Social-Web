import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthType = {
    id: number | null
    email: null | string
    login: null | string
    isAuth:boolean
}


let initialState: AuthType = {
    id: null,
    email: "1",
    login: "1",
    isAuth: false
}

export const authReducer = (state = initialState, action: authActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export type authActionType =
    | ReturnType<typeof setAuthUserData>
    | FormAction

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload:{
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUser = () => (dispatch:Dispatch) => {
       return authAPI.me()
            .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id ,login, email,true))
            }
        });
    }

export const login = (email:string,password:string,rememberMe:boolean):ThunkType  => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUser())
                }else{
                   let message =  response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit("login",{_error:message}))
                }
            })
    }
}
export const logout = () =>{
    return (dispatch:Dispatch) => {
        authAPI.logout()
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null,false))
            }
        });
    }
}

