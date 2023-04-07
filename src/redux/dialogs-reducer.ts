import { v1 } from "uuid";

const SEND_MESSAGE = "SEND_MESSAGE";

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
}

let initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Ekaterina'},
        {id: 3, name: 'Alexander'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Victoria'},
        {id: 6, name: 'Olga'},
        {id: 7, name: 'Svetlana'}
    ],
    message: [
        {message: 'Hello',id: v1()},
        {message: 'How are your',id: v1()},
        {message: 'Normal',id: v1()},
        {message: 'Yo',id: v1()},
        {message: 'What',id: v1()}

    ],
}


type ActionTypeAC = SendNewMessageACType

const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypeAC):DialogPageType => {
    switch (action.type) {
        case "SEND_MESSAGE" :{
            return { ...state, message: [...state.message, { message: action.newMessage, id: v1()}] };
            }
        default:
            return state
    }
};

export type SendNewMessageACType = | ReturnType<typeof SendNewMessageAC>

export const SendNewMessageAC = (newMessage: string) => {
    return {
        type: SEND_MESSAGE,
        newMessage: newMessage
    } as const
}

export default dialogsReducer;