import {IsFetchingType, setIsFetching} from "./actions/actions";
import {usersAPI} from "../02_DAL/api";
import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {updateObjInArray} from "../03_commons/utils/helpers";

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
                users: updateObjInArray(state.users, action.payload.userID, "id", {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjInArray(state.users, action.payload.userID, "id", {followed: false})

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

//commons
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: FollowType | UnfollowType) => {
    dispatch(setIsFollowing(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator)
    }
    dispatch(setIsFollowing(false, userId))
}

//types
export type UsersReducerType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | SetUsersCountType
    | IsFetchingType | SetIsFollowingType

type FollowType = ReturnType<typeof setFollow>
type UnfollowType = ReturnType<typeof setUnfollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetUsersCountType = ReturnType<typeof setUsersCount>
type SetIsFollowingType = ReturnType<typeof setIsFollowing>

//actions
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

//thunks
export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(setIsFetching(true))
    const res = await usersAPI.getUsers(currentPage, pageSize)
    await (
        dispatch(setIsFetching(false)),
            dispatch(setUsers(res.items)),
            dispatch(setUsersCount(res.totalCount))
    )
}
export const followTC = (userId: number): AppThunk => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), setFollow(userId))
}
export const unfollowTC = (userId: number): AppThunk => async dispatch => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), setUnfollow(userId))
}
export default UsersReducer;
