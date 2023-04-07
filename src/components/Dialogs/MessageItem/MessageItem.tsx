import React from "react";
import s from '../Dialogs.module.css'

type MessageItemPropsType = {
    id:string
    message:string
}

const MessageItem: React.FC<MessageItemPropsType> = (props) => {
    return(
    <div className={s.message} key={props.id}>{props.message}</div>
    )
}
export default MessageItem