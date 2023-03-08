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
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component<usersStatePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageUserPage}&count= ${this.props.pageSizeUserPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count= ${this.props.pageSizeUserPage}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <Users
                totalUserCountUserPage={this.props.totalUserCountUserPage}
                pageSizeUserPage={this.props.pageSizeUserPage}
                currentPageUserPage={this.props.currentPageUserPage}
                onPageChanged={this.onPageChanged}
                setUser={this.props.stateUserPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}

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



export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)