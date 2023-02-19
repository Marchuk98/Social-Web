import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/redux-store";
import MyPostContainer from "./MyPosts/MyPostContainer";


// type ProfilePropsType ={
//     store:StoreType
// }

// const Profile: React.FC<ProfilePropsType> = (props) => {
const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer /*store={props.store}*//>
        </div>

    );
}


export default Profile;