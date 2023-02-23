import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {profileStateToProps} from "./MyPostContainer";


const MyPost = (props:profileStateToProps)=> {

    const addPost = () => {
            props.addPost();
    }
    const onChangePostTextArea = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
        }

    return (
        <div className={s.postBlock}>
            My post
            <div>
                <div>
                    <textarea onChange={onChangePostTextArea}  value={props.statePostType.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.statePostType.post.map((el,index)=> (<Post key={index} message={el.message} likesCount={el.likesCount}/>))}
            </div>
        </div>
    );
}

export default MyPost