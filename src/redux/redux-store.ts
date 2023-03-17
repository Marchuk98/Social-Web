import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer  from "./sidebar-reducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    userPage:usersReducer,
    sidebar:sidebarReducer,
    auth:authReducer,
});


let store = createStore(rootReducer);


export type AppRootState  = ReturnType<typeof rootReducer>

//@ts-ignore
window.store=store

export default store;