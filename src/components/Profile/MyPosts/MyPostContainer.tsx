import React from "react";
import {AppRootState} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, ProfilePageType} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPost from "./MyPost";



type MapStateToPropsType = {
    statePostType:ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: (newPostText:string) => void

}

export type profileStateToProps = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppRootState):MapStateToPropsType => {
    return {
        statePostType:state.profilePage
    }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addPost:(newPostText:string)=>{
            dispatch(addPostAC(newPostText))
        }

    }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);

