import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";
import {ProfilePropsType} from "../Profile";




const ProfileInfo:React.FC<ProfilePropsType> = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.small === null ? userPhoto : props.profile.photos.small} alt={'photo'}/>
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
}

export default ProfileInfo;
