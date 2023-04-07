import React from "react";
import {DialogPageType, SendNewMessageAC} from "../../redux/dialogs-reducer";
import {AppRootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    stateDialogPage:DialogPageType
}

type MapDispatchToPropsType = {
    sendHandlerNewMessage: (newMessage: string) => void
}

export type dialogsStateToProps = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppRootState):MapStateToPropsType => {
    return {
        stateDialogPage:state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        sendHandlerNewMessage:(newMessage: string)=> {
            dispatch(SendNewMessageAC(newMessage));
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)

