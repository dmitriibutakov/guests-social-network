import {IsFetchingType} from "./actions/actions";

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type UserType = {
    name: string,
    followed: boolean,
    id: number,
    ava: string,
    status: string,
    location: { city: string, country: string }
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const UsersReducer = (state: UsersPageType = initialState, action: UsersReducerType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: [...state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)]
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: [...state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)]
            }
        case "SET-USERS":
            return {...state, users: action.payload.refreshUsers}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
};

export type UsersReducerType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | SetUsersCountType | IsFetchingType

type FollowType = ReturnType<typeof setFollow>
type UnfollowType = ReturnType<typeof setUnfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetUsersCountType = ReturnType<typeof setUsersCount>



export const setFollow = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {userID}
    } as const
}
export const setUnfollow = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {userID}
    } as const
}
export const setUsers = (refreshUsers: UserType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            refreshUsers
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-USERS-COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}

export default UsersReducer;
