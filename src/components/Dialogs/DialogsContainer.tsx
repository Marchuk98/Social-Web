import React from "react";
import {DialogPageType, SendMessageAC, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppRootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    stateDialogPage:DialogPageType
}

type MapDispatchToPropsType = {
    updateNewMessage: (newMessage: string) => void
    sendMessage: () => void

}

export type dialogsStateToProps = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppRootState):MapStateToPropsType => {
    return {
        stateDialogPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessage:(newMessage: string)=> {
            dispatch(UpdateNewMessageAC(newMessage));
        },
        sendMessage:()=>{
            dispatch(SendMessageAC())
        }

    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

