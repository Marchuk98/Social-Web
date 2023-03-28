import React from "react";
import {DialogPageType, SendMessageAC, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {AppRootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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


export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)

