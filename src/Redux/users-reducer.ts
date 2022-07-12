import {IsFetchingType, setIsFetching} from "./actions/actions";
import {usersAPI} from "../Api/api";
import {Dispatch} from "redux";
import {AppReducersTypes, AppThunk} from "./store";

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
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
    followingInProgress: [1],
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
        case "SET-FOLLOWING":
            return {
                ...state,
                followingInProgress: action.payload.isFollowing ?
                    [...state.followingInProgress, action.payload.userId]
                    : [...state.followingInProgress.filter(id => id !== action.payload.userId)]
            }
        default:
            return state
    }
};

export type UsersReducerType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | SetUsersCountType
    | IsFetchingType | SetIsFollowingType

type FollowType = ReturnType<typeof setFollow>
type UnfollowType = ReturnType<typeof setUnfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetUsersCountType = ReturnType<typeof setUsersCount>
type SetIsFollowingType = ReturnType<typeof setIsFollowing>

const setFollow = (userID: number) => ({type: "FOLLOW", payload: {userID}} as const)
const setUnfollow = (userID: number) => ({type: "UNFOLLOW", payload: {userID}} as const)
const setUsers = (refreshUsers: UserType[]) => ({type: "SET-USERS", payload: {refreshUsers}} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", payload: {currentPage}} as const)
const setUsersCount = (totalUsersCount: number) => ({
    type: "SET-USERS-COUNT",
    payload: {totalUsersCount}
} as const)
const setIsFollowing = (isFollowing: boolean, userId: number) => ({
    type: "SET-FOLLOWING",
    payload: {isFollowing, userId}
} as const)

export const getUsers = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(setIsFetching(true))
    const res = await usersAPI.getUsers(currentPage, pageSize)
    await (
        dispatch(setIsFetching(false)),
            dispatch(setUsers(res.items)),
            dispatch(setUsersCount(res.totalCount))
    )
}

export const follow = (userId: number): AppThunk => async dispatch => {
    dispatch(setIsFollowing(true, userId))
   const res = await usersAPI.followUser(userId)
        if (res.data.resultCode === 0) dispatch(setFollow(userId))
        await dispatch(setIsFollowing(false, userId))
}

export const unfollow = (userId: number): AppThunk => async dispatch => {
    dispatch(setIsFollowing(true, userId))
    const res = await usersAPI.unfollowUser(userId)
        if (res.data.resultCode === 0) dispatch(setUnfollow(userId))
        await dispatch(setIsFollowing(false, userId))
}
export default UsersReducer;
