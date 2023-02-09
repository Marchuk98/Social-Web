import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {ActionTypeAC, ProfilePageType} from "../../../redux/state";
import {addPostAC, UpdateNewPostAC} from "../../../redux/profile-reducer";


type MyPostPropsType = {
    dispatch:(action:ActionTypeAC)=> void
    state:ProfilePageType
}

const MyPost: React.FC<MyPostPropsType> = (props)=> {


    const postElement = props.state.post.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(addPostAC());
    }
    const onChangePostTextArea = () => {
            if(newPostElement.current){
                let text = newPostElement.current.value;
                props.dispatch(UpdateNewPostAC(text));
                newPostElement.current.value = "";
            }
        }

    return (
        <div className={s.postBlock}>
            My post
            <div>
                <div>
                    <textarea onChange={onChangePostTextArea} ref={newPostElement} value={props.state.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPost