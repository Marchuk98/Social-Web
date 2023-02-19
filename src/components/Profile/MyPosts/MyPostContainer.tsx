import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {addPostAC, UpdateNewPostAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


// type MyPostPropsType = {
//     store:StoreType
// }

// const MyPostContainer: React.FC<MyPostPropsType> = (props)=> {
const MyPostContainer = () => {

    //     let state = props.store.getState()
    //
    // const addPost = () => {
    //         props.store.dispatch(addPostAC(state.profileReducer.newPostText))
    // }
    // const onChangePostTextArea = (newText: string) => {
    //   props.store.dispatch(UpdateNewPostAC(newText))
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC(state.profileReducer.newPostText))
                }
                const onChangePostTextArea = (newText: string) => {
                    store.dispatch(UpdateNewPostAC(newText))
                }
                return <MyPost addPost={addPost} updateNewPostText={onChangePostTextArea}
                               post={state.profileReducer.post}
                               newPostText={state.profileReducer.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostContainer
