import React from "react";
import {AppRootState} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, ProfilePageType, UpdateNewPostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPost from "./MyPost";



type MapStateToPropsType = {
    statePostType:ProfilePageType
}

type MapDispatchToPropsType = {
    updateNewPostText: (newMessage: string) => void
    addPost: () => void

}

export type profileStateToProps = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppRootState):MapStateToPropsType => {
    return {
        statePostType:state.profilePage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewPostText:(newMessage: string)=> {
            dispatch(UpdateNewPostAC(newMessage));
        },
        addPost:()=>{
            dispatch(addPostAC())
        }

    }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);

