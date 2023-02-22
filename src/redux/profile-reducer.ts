import post from "../components/Profile/MyPosts/Post/Post";

const ADD_POST = "ADD-POST";

const updateNewPostText = "updateNewPostText";

export type ProfilePageType = {
    post: Array<PostType>
    newPostText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState: ProfilePageType = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 32},
        {id: 2, message: 'It\'s my first post', likesCount: 45},
        {id: 3, message: 'Hybrid theory', likesCount: 23},
        {id: 4, message: 'To be continued', likesCount: 75}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypeAC) => {
    switch (action.type) {
        case "ADD-POST":
            let newPostText = state.newPostText;
            return {...state, newPostText: '', post:[...state.post, {id:state.post.length+1, message:newPostText,likesCount:15}]}
        case "updateNewPostText" :
            return {...state,newPostText:action.newText}
        default :
            return state;
    }
}

type ActionTypeAC = addPostACType | UpdateNewPostAC


export type addPostACType = ReturnType<typeof addPostAC>;

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export type UpdateNewPostAC = ReturnType<typeof UpdateNewPostAC>

export const UpdateNewPostAC = (newText: string) => {
    return {
        type: updateNewPostText,
        newText: newText
    } as const
}

export default profileReducer;