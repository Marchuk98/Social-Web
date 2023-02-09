import {ActionTypeAC, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";

const updateNewPostText = "updateNewPostText";


const profileReducer = (state: ProfilePageType , action:ActionTypeAC) => {
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