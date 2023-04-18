import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer, {dialogsActionType} from "./dialogs-reducer";
import sidebarReducer  from "./sidebar-reducer";
import {userActionType, usersReducer} from "./users-reducer";
import {authActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appActionType, appReducer} from "./app-reducer";



let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    userPage:usersReducer,
    sidebar:sidebarReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer
});


let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


export type AppRootState  = ReturnType<typeof rootReducer>


export type rootActionType =
    | appActionType
    | authActionType
    | dialogsActionType
    | userActionType

export type ThunkType = ThunkAction<void, AppRootState, unknown, rootActionType>


//@ts-ignore
window.store=store

export default store;