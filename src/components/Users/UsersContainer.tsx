import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";


type mapStateToPropsType = {
    stateUserPage:UserType[]
    pageSizeUserPage:number
    totalUserCountUserPage:number
    currentPageUserPage:number
}

type mapDispatchToPropType = {
    follow:(userId: number)=> void
    unfollow:(userId: number)=> void
    setUsers:(users:UserType[])=> void
    setCurrentPage:(currentPage:number) => void
    setTotalUsersCount:(totalCount:number) => void
}


 export type usersStatePropsType = mapStateToPropsType & mapDispatchToPropType

const mapStateToProps = (state:StoreType):mapStateToPropsType => {
    return {
        stateUserPage: state.userPage.users,
        pageSizeUserPage:state.userPage.pageSize,
        totalUserCountUserPage:state.userPage.totalUserCount,
        currentPageUserPage:state.userPage.currentPage
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
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}



export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)