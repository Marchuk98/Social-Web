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
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 5
            };
            state.post.push(newPost);
            state.newPostText = '';
            return state;
        case "updateNewPostText" :
            state.newPostText = action.newText;
            return state;
        default :
            return state;
    }
}

type ActionTypeAC = addPostACType | UpdateNewPostAC


export type addPostACType = ReturnType<typeof addPostAC>;

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
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