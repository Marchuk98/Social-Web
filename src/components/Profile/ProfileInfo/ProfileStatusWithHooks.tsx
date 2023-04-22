import React, {ChangeEvent, useEffect, useState,KeyboardEvent} from "react";

type ProfileStatusPropsType = {
    status:string
    updateStatus:(status:string) => void
}

const ProfileStatusWithHooks = (props:ProfileStatusPropsType) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() =>{
        setStatus(props.status)
    },[props.status])


    const EditModeSwitch = () => {
        setEdit(!edit)
        props.updateStatus(status)
    }

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            EditModeSwitch();
            props.updateStatus(status);
        }
    }

    return (
        !edit
            ? <span onDoubleClick={EditModeSwitch}>{props.status||'empty status'}</span>
            : <input value={status} onChange={onChangeHandler} onBlur={EditModeSwitch} autoFocus onKeyDown={onKeyPressHandler}/>
    )
}

export default ProfileStatusWithHooks;