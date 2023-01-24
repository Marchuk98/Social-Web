import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItems/DialogItem";
import {DialogPageType} from "../../redux/state";
import MessageItem from "./MessageItem/MessageItem";



type DialogsPropsType = {
    state: DialogPageType
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const DialogsElement = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const MessageElement = props.state.message.map(m => <MessageItem id={m.id} message={m.message}/>)





    const NewDialogElement = React.createRef<HTMLTextAreaElement>();
    const addDialog = () => {
        let text = NewDialogElement.current?.value
        alert(text);
    }




    return (
        <div className={s.dialogs}>
            <div>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {MessageElement}
                <textarea ref={NewDialogElement}></textarea>
                <button onClick={addDialog}>add Dialog</button>
            </div>

        </div>
    );
}

export default Dialogs