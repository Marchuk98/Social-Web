const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"



export type UserPageType = {
    users: UserType[]
    pageSize:number
    totalUserCount:number
    currentPage:number
    isFetching: boolean

}

export type UserType = {
    id: number
    photo:string
    name: string
    description: string
    location: LocationType
    followed: boolean
}

type LocationType = {
    country: string
    city: string
}

// export type PhotoType = {
//     small:string
//     large:string
// }

let initialState: UserPageType = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage:1,
    isFetching: true
}


export const usersReducer = (state: UserPageType = initialState, action: ActionType): UserPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case UNFOLLOW: {
            return {...state, users:state.users.map(el=> el.id === action.userId ? {...el, followed:false}:el)}
        }
        case "SET-USERS":{
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT":{
            return {...state,totalUserCount:action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.isFetching}
        }
        default:
            return state
    }
}


type ActionType =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    }as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    }as const
}

export const setUsersAC = (users:UserType[])=> {
    return{
        type:SET_USERS,
        users
    }as const
}

export const setCurrentPageAC = (currentPage:number) => {
    return{
        type: SET_CURRENT_PAGE,
        currentPage
    }as const
}

export const setTotalUsersCountAC = (totalCount:number) => {
    return{
        type: SET_TOTAL_USER_COUNT,
        count:totalCount

    }as const
}

export const toggleIsFetchingAC = (isFetching:boolean)=>{
    return{
        type:TOGGLE_IS_FETCHING,
        isFetching
    }as const
}