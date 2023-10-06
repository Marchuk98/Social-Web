import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";



const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

export type AuthType = {
    id: number | null
    email: null | string
    login: null | string
    isAuth: boolean
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


export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUser = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))

    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUser())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

