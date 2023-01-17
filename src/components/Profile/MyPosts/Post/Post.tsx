import React from "react";
import s from "./Post.module.css"
import state from "../../../../redux/state";


const Post = () => {
    return (
        <div className={s.item}>
            <ul className={s.itemElement}>
                {state.profilePage.post.map(p=>{
                    return(
                        <li key={p.id}>
                            <img src={p.img} alt={""}/>
                            <span>{p.message}</span>
                            <span>{p.likesCount}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Post;


