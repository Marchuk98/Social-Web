import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {profileStateToProps} from "./MyPostContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type AddNewPostProfileType = {
    newPostText:string
}

const maxLength10 = maxLengthCreator(10)

const MyPost = (props:profileStateToProps)=> {

    const addPostText = (value:AddNewPostProfileType) => {
            props.addPost(value.newPostText);
    }
    return (
        <div className={s.postBlock}>
            <AddPostFormRedux onSubmit={addPostText}/>
            <div className={s.posts}>
                {props.statePostType.post.map((el,index)=> (<Post key={index} message={el.message} likesCount={el.likesCount}/>))}
            </div>
        </div>
    );
}




    const AddNewPostProfile:React.FC<InjectedFormProps<AddNewPostProfileType>> = (props) => {
        return(
            <div>
                <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Textarea}
                        name={'newPostText'}
                        placeholder={'Enter your post'}
                        validate={[required,maxLength10]}/>
                </div>
                <div>
                    <button type={"submit"}>add post</button>
                </div>
                </form>
            </div>
        )
    }

const AddPostFormRedux = reduxForm<AddNewPostProfileType>({form:"dialogAddMessageForm"})(AddNewPostProfile)

export default MyPost