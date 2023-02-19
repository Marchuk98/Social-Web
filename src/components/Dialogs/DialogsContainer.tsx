import React from "react";
import {SendMessageAC, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// type DialogsPropsType = {
//     store:StoreType
// }

// const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
const DialogsContainer = () => {
    // let state = props.store.getState().dialogsReducer;
    //
    // const onSendMessageClick = () => {
    //     props.store.dispatch(SendMessageAC(state.newMessageBody))
    //
    // }
    //
    // const onChangeTextAreaHandler = (newMessage: string) => {
    //         props.store.dispatch(UpdateNewMessageAC(newMessage));
    // }
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsReducer;

                const onSendMessageClick = () => {
                    store.dispatch(SendMessageAC(state.newMessageBody))

                }

                const onChangeTextAreaHandler = (newMessage: string) => {
                    store.dispatch(UpdateNewMessageAC(newMessage));
                }
                return <Dialogs updateNewMessage={onChangeTextAreaHandler} sendMessage={onSendMessageClick}
                                state={state}/>
            }
            }
        </StoreContext.Consumer>
    );
}
export default DialogsContainer