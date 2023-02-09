import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItems/DialogItem";
import {ActionTypeAC, DialogPageType} from "../../redux/state";
import MessageItem from "./MessageItem/MessageItem";
import {SendMessageAC, UpdateNewMessageAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: DialogPageType
    dispatch: (action: ActionTypeAC) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const DialogsElement = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const MessageElement = props.state.message.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>)


    const NewDialogElement = React.createRef<HTMLTextAreaElement>();


    const onSendMessageClick = () => {
        props.dispatch(SendMessageAC());

    }

    const onChangeTextAreaHandler = () => {

        if (NewDialogElement.current) {
            let text = NewDialogElement.current.value;
            props.dispatch(UpdateNewMessageAC(text));
        }
    }

    return (
        <div className={s.dialogs}>
            <div>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                <div>{MessageElement}</div>
                <div>
                    <div><textarea value={props.state.newMessageBody}
                                   onChange={onChangeTextAreaHandler}
                                   placeholder={'Enter your message'} ref={NewDialogElement}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Dialogs