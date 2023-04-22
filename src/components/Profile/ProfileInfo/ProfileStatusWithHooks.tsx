import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status:string
    updateStatus:(status:string) => void
}


const ProfileStatusWithHooks = (props:ProfileStatusPropsType) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    // useEffect(() =>{
    //     ////// 85
    // },[])


    const EditModeSwitch = () => {
        setEdit(!edit)
    }

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
       props.updateStatus(status)
    }


    return (

        !edit
            ? <span onDoubleClick={EditModeSwitch}>{props.status || 'empty status'}</span>
            : <input value={status} onChange={onChangeHandler} onBlur={EditModeSwitch} autoFocus/>
    )

}

export default ProfileStatusWithHooks;