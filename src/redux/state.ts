import {renderTree} from "../render";

export type MessageType = {
    id:number
    message:string
}
export type DialogType = {
    id:number
    name:string
}
export type PostType = {
    id:number
    message:string
    likesCount: number
}

export type ProfilePageType = {
    post: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
}

export type SidebarType = {}

export type RootStatePropsType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sidebar:SidebarType
}


export let state:RootStatePropsType = {
    profilePage: {
        post: [
            {id: 1, message: 'Hi, how are you?', likesCount: 32},
            {id: 2, message: 'It\'s my first post', likesCount: 45},
            {id: 3, message: 'Hybrid theory', likesCount: 23},
            {id: 4, message: 'To be continued', likesCount: 75}
        ]
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
            {id:1, message:'Hello'},
            {id:2, message:'How are your'},
            {id:3, message:'Normal'},
            {id:4, message:'Yo'},
            {id:5, message:'What'}

        ]
    },
        sidebar: {}
}

export const addPost = (postMessage:string) => {
    const newPost: PostType ={
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 5
    }
    state.profilePage.post.push(newPost);

    renderTree(state, addPost);
}

export default state;
