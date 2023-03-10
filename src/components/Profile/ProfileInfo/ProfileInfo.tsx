import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'

type ProfileInfoPropsType = {
    profile:any
}


const ProfileInfo = (props:ProfileInfoPropsType) => {
        if(!props.profile){
            return <Preloader/>
        }
    return (
        <div>
            <div>
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b0b69b110218509.5fe75aca3a23e.jpg"
                    alt=""/>
            </div>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large} alt={'photo'}/>
                <div>{props.profile.fullname}</div>
                ava + des</div>
        </div>

    );
}

export default ProfileInfo;