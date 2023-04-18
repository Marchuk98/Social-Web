import {AppRootState} from "./redux-store";
import {createSelector} from "@reduxjs/toolkit";

const getUsersSelector = (state:AppRootState) => {
    return state.userPage.users
}
export const geetUsers = createSelector(getUsersSelector,(users)=>{
    return  users.filter(el => true)
})
export const getPageSize = (state:AppRootState) => {
    return state.userPage.pageSize
}
export const getTotalUsersCount = (state:AppRootState) => {
    return state.userPage.totalUserCount
}
export const getCurrentPage = (state:AppRootState) => {
    return state.userPage.currentPage
}
export const getIsFetching = (state:AppRootState) => {
    return  state.userPage.isFetching
}
export const getFollowingInProgress = (state:AppRootState) => {
    return state.userPage.followingInProgress
}
