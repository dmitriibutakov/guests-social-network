import {IsFetchingType, setIsFetching} from "./actions/actions";
import {usersAPI} from "../01_DAL/api";
import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {updateObjInArray} from "../03_commons/utils/helpers";
import {errorUtils} from "./errors-utils";
import {AxiosError} from "axios";

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
    photos: { small: string, large: string },
    status: string,
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
const setUsersCount = (totalUsersCount: number) => ({
    type: "SET-USERS-COUNT",
    payload: {totalUsersCount}
} as const)
const setIsFollowing = (isFollowing: boolean, userId: number) => ({
    type: "SET-FOLLOWING",
    payload: {isFollowing, userId}
} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", payload: {currentPage}} as const)

//thunks
export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    try {
        dispatch(setIsFetching(true))
        const result = await usersAPI.getUsers(currentPage, pageSize)
        await (
            dispatch(setIsFetching(false)),
                dispatch(setUsers(result.items)),
                dispatch(setUsersCount(result.totalCount))
        )
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }

}
export const followTC = (userId: number): AppThunk => async dispatch => {
    try {
        await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), setFollow(userId))
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}
export const unfollowTC = (userId: number): AppThunk => async dispatch => {
    try {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), setUnfollow(userId))
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}
export default UsersReducer;
