import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType ={
    state:ProfilePageType
    addPost: (postMessage: string) => void
}



const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost addPost={props.addPost} post={props.state.post}/>
        </div>

    );
}


export default Profile;