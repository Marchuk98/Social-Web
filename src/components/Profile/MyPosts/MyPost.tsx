import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";


type MyPostPropsType = {
    addPost:()=> void
    updateNewPostText:(newText: string)=>void
    post:PostType[]
    newPostText:string
}

const MyPost: React.FC<MyPostPropsType> = (props)=> {

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
                    <textarea onChange={onChangePostTextArea}  value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.post.map(el=> (<Post message={el.message} likesCount={el.likesCount}/>))}
            </div>
        </div>
    );
}

export default MyPost