import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}


const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>

            <img src="https://i.pinimg.com/originals/79/ad/65/79ad652555114fa87f3ce10f96de59ee.jpg"
                 alt='Avatar'/>
            {props.message}
            <div>
                <span>Likes:</span>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;




