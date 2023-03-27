import React from "react";
import {DialogPageType, SendMessageAC, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppRootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    stateDialogPage:DialogPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessage: (newMessage: string) => void
    sendMessage: () => void

}

export type dialogsStateToProps = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppRootState):MapStateToPropsType => {
    return {
        stateDialogPage:state.dialogsPage,
        isAuth: state.auth.isAuth
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

