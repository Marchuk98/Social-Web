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

const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypeAC) => {
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

export const SendMessageAC = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
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