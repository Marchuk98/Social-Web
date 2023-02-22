import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer  from "./sidebar-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
});


let store = createStore(rootReducer);


export type StoreType = ReturnType<typeof rootReducer>

export default store;