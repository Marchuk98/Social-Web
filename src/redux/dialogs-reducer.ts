import {ActionTypeAC, DialogPageType, MessageType} from "./state";


const SEND_MESSAGE = "SEND_MESSAGE";

const updateMessageText = "updateMessageText"

 const dialogsReducer = (state: DialogPageType, action: ActionTypeAC) => {
    switch (action.type) {
        case "updateMessageText" :
            state.newMessageBody = action.newMessage;
            return state;
        case 'SEND_MESSAGE':
            let newMessage: MessageType = {
                id: 6, message: state.newMessageBody
            };
            state.message.push(newMessage)
            state.newMessageBody = '';
            return state;
        default:
            return state
    }
};



    export type SendMessageACType = ReturnType<typeof SendMessageAC>

    export const SendMessageAC = () => {
        return {
            type: SEND_MESSAGE,
        } as const
    }

    export type UpdateNewMessageACType =  | ReturnType<typeof UpdateNewMessageAC>

    export const UpdateNewMessageAC = (newMessage: string) => {
        return {
            type: updateMessageText,
            newMessage: newMessage
        } as const
    }

    export default dialogsReducer;