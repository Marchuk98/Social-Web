import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'
import {ProfilePropsType} from "../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo:React.FC<ProfilePropsType> = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large} alt={'photo'}/>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
}

export default ProfileInfo;
