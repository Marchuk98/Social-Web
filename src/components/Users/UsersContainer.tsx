import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserPageType, UserType} from "../../redux/usersReducer";
import Users from "./Users";


type mapStateToPropsType = {
    stateUserPage:UserPageType
}

type mapDispatchToPropType = {
    follow:(userId: number)=> void
    unfollow:(userId: number)=> void
    setUsers:(users:UserType[])=> void
}


 export type usersStatePropsType = mapStateToPropsType & mapDispatchToPropType

const mapStateToProps = (state:StoreType):mapStateToPropsType => {
    return {
        stateUserPage: state.userPage
    }
}


const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId: number)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:UserType[])=> {
            dispatch(setUsersAC(users))
        },
    }
}



export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)