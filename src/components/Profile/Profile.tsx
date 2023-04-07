import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    status:string
    updateStatus:(status:string) => void
}


const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>

    );
}


export default Profile;