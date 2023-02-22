const SEND_MESSAGE = "SEND_MESSAGE";

const updateMessageText = "updateMessageText"

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
    newMessageBody: string
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
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are your'},
        {id: 3, message: 'Normal'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'What'}

    ],
    newMessageBody: "Text"
}


type ActionTypeAC = SendMessageACType | UpdateNewMessageACType

const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypeAC):DialogPageType => {
    switch (action.type) {
        case "updateMessageText" :
            return {...state, newMessageBody: action.newMessage}
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            return {...state, newMessageBody:'', message:[...state.message, {id:state.message.length+1, message:body}]}
        default:
            return state
    }
};


export type SendMessageACType = ReturnType<typeof SendMessageAC>

export const SendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export type UpdateNewMessageACType = | ReturnType<typeof UpdateNewMessageAC>

export const UpdateNewMessageAC = (newMessage: string) => {
    return {
        type: updateMessageText,
        newMessage: newMessage
    } as const
}

export default dialogsReducer;