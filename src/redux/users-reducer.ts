import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


export type UserPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UserType = {
    id: number
    photos: {
        small: string,
        large: string
    },
    name: string
    description: string
    location: LocationType
    followed: boolean
}

type LocationType = {
    country: string
    city: string
}

let initialState: UserPageType = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: userActionType): UserPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: updateObjectInArray(state.users,action.userId, "id",{followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: updateObjectInArray(state.users,action.userId, "id",{followed: false})
            }
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT": {
            return {...state, totalUserCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
        }
        default:
            return state
    }
}


export type userActionType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export const followSuccess = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, count: totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,userId}) as const

export const getUsers = (page: number, pageSizeUserPage: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSizeUserPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const followUnfollowFlow = async (dispatch:Dispatch, userId:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)
}