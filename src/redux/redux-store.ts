import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer  from "./sidebar-reducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'



let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    userPage:usersReducer,
    sidebar:sidebarReducer,
    auth:authReducer,
    form: formReducer
});


let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


export type AppRootState  = ReturnType<typeof rootReducer>

//@ts-ignore
window.store=store

export default store;