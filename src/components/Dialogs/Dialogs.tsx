import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItems/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogPageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    sendMessage: () => void
    updateNewMessage: (newMessage: string) => void
    state: DialogPageType
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const onSendMessageClick = () => {
        props.sendMessage();

    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div>
                {props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                <div>
                    {props.state.message.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>)}
                </div>
                <div>
                    <div><textarea value={props.state.newMessageBody} onChange={onChangeTextAreaHandler}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Dialogs