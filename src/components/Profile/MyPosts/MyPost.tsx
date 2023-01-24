import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostPropsType = {
    post: Array<PostType>
    addPost:(postMessage:string) => void
}

const MyPost: React.FC<MyPostPropsType> = (props)=> {


    const postElement = props.post.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let NewPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        if(NewPostElement.current){
            props.addPost(NewPostElement.current.value)
        }
    }
    return (
        <div className={s.postBlock}>
            My post
            <div>
                <div>
                    <textarea ref={NewPostElement}></textarea>
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