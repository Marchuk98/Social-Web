import {getAuthUser} from "./auth-reducer";
import {ThunkType} from "./redux-store";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS"

let initialState = {
    initialized:false
}

export const appReducer = (state = initialState ,action:appActionType) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {...state,initialized: true}
        }
        default:
            return state
    }
}

export type appActionType = | ReturnType<typeof initializedSuccess>

export const initializedSuccess = (initialized:boolean) => ({type:SET_INITIALIZED_SUCCESS,initialized}as const)


export const initializedApp = ():ThunkType => (dispatch) => {
     dispatch(getAuthUser())
    debugger
}