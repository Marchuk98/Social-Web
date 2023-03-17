import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component<usersStatePropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPageUserPage, this.props.pageSizeUserPage).then(data => {
            debugger
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSizeUserPage).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }

    render() {
        return (
            <>
                {this.props.isFetchingUserPage ? <Preloader/> : null}
                <Users
                    totalUserCountUserPage={this.props.totalUserCountUserPage}
                    pageSizeUserPage={this.props.pageSizeUserPage}
                    currentPageUserPage={this.props.currentPageUserPage}
                    onPageChanged={this.onPageChanged}
                    setUser={this.props.stateUserPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

type mapStateToPropsType = {
    stateUserPage: UserType[]
    pageSizeUserPage: number
    totalUserCountUserPage: number
    currentPageUserPage: number
    isFetchingUserPage: boolean
    followingInProgress:number[]
}

type mapDispatchToPropType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress:(isFetching: boolean,userId:number)=> void
}


export type usersStatePropsType = mapStateToPropsType & mapDispatchToPropType

const mapStateToProps = (state: AppRootState): mapStateToPropsType => {
    return {
        stateUserPage: state.userPage.users,
        pageSizeUserPage: state.userPage.pageSize,
        totalUserCountUserPage: state.userPage.totalUserCount,
        currentPageUserPage: state.userPage.currentPage,
        isFetchingUserPage: state.userPage.isFetching,
        followingInProgress:state.userPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersContainer)