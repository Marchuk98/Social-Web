import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={s.postBlock}>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post/>
            </div>
        </div>
    );
}

export default MyPost