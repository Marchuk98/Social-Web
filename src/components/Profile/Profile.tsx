import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType ={
    state:ProfilePageType
    addPost: () => void
    updateNewPostText:(newText:string) => void
}



const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost addPost={props.addPost} post={props.state.post} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>

    );
}


export default Profile;