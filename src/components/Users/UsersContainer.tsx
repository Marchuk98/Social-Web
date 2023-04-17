import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress, unfollow,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


class UsersContainer extends React.Component<usersStatePropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPageUserPage, this.props.pageSizeUserPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSizeUserPage)
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
    followingInProgress: number[]
}

type mapDispatchToPropType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPageUserPage: number, pageSizeUserPage: number) => void
}

export type usersStatePropsType = mapStateToPropsType & mapDispatchToPropType

const mapStateToProps = (state: AppRootState): mapStateToPropsType => {
    return {
        stateUserPage: state.userPage.users,
        pageSizeUserPage: state.userPage.pageSize,
        totalUserCountUserPage: state.userPage.totalUserCount,
        currentPageUserPage: state.userPage.currentPage,
        isFetchingUserPage: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers
    })
)(UsersContainer)