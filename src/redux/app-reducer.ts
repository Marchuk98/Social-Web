import {getAuthUser} from "./auth-reducer";
import {AppThunkType} from "./redux-store";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS"

type InitialStateType = {
    initialized: boolean
}

let initialState:InitialStateType = {
    initialized:false
}

export const appReducer = (state = initialState ,action:appActionType):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {...state,initialized: true}
        }
        default:
            return state
    }
}

export type appActionType = | ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({type:SET_INITIALIZED_SUCCESS}as const)


export const initializedApp = ():AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUser())
    promise.then(()=> {
        dispatch(initializedSuccess())
    })
}