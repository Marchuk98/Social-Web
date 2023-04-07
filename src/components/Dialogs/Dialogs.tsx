import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItems/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {dialogsStateToProps} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

type AddMessageFormType = {
    newMessageBody: string
}

const Dialogs = (props: dialogsStateToProps) => {

    const addNewMessage = (value:AddMessageFormType) => {
        props.sendHandlerNewMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div>
                {props.stateDialogPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            <div className={s.messages}>
                <div>
                    {props.stateDialogPage.message.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>)}
                </div>
            </div>

        </div>
    );
}

const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Textarea}
                        name={'newMessageBody'}
                        placeholder={'Enter your message'}
                        validate={[required,maxLength100]}/>
                </div>
                <div>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form:"dialogAddMessageForm"})(AddMessageForm)


export default Dialogs