import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypeAC, ProfilePageType} from "../../redux/state";


type ProfilePropsType ={
    state:ProfilePageType
    dispatch:(action:ActionTypeAC)=> void
}



const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost dispatch={props.dispatch} state={props.state}/>
        </div>

    );
}


export default Profile;