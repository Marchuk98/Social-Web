import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer  from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {useDispatch} from "react-redux";



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

export type AppDispatchType = ThunkDispatch<AppRootState, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatchType>()

export type AppThunkType<ReturnType = void> =  ThunkAction<void, AppRootState, unknown, AnyAction>

//@ts-ignore
window.store=store

export default store;