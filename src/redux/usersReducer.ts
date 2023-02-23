const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"


export type UserPageType = {
    users: UserType[]
}

export type UserType = {
    id: number
    photoUrl:string
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
    users: []
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
            return {...state, users:[...state.users, ...action.users]}
        }
        default:
            return state
    }
}


type ActionType = followACType | unfollowACType | setUsersACType

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>

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


export type setUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users:UserType[])=> {
    return{
        type:SET_USERS,
        users
    }as const
}