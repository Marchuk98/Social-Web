import profileReducer, {addPostAC, UpdateNewPostAC} from "./profile-reducer";
import dialogsReducer, {SendMessageAC, UpdateNewMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    post: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
    newMessageBody: string
}

export type SidebarType = {}

export type RootStatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStatePropsType
    _renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStatePropsType
    dispatch: (action: ActionTypeAC) => void
}

export type ActionTypeAC =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof UpdateNewPostAC>
    | ReturnType<typeof UpdateNewMessageAC>
    | ReturnType<typeof SendMessageAC>


export const store: StoreType = {
    _renderEntireTree() {
    },
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi, how are you?', likesCount: 32},
                {id: 2, message: 'It\'s my first post', likesCount: 45},
                {id: 3, message: 'Hybrid theory', likesCount: 23},
                {id: 4, message: 'To be continued', likesCount: 75}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vladimir'},
                {id: 2, name: 'Ekaterina'},
                {id: 3, name: 'Alexander'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Victoria'},
                {id: 6, name: 'Olga'},
                {id: 7, name: 'Svetlana'}
            ],
            message: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are your'},
                {id: 3, message: 'Normal'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'What'}

            ],
            newMessageBody: "Text"
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._renderEntireTree();

    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },
};





