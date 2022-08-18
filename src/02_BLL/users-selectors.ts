import {AppStateType} from "./store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

export const getUsersSelector = (state: AppStateType) => state.usersPage.users
export const getUsersSuperSelector = createSelector(getUsersSelector, (users: UserType[]) => users)
export const getPageSizeSelector = (state: AppStateType) => state.usersPage.pageSize
export const getUsersCountSelector = (state: AppStateType) => state.usersPage.totalUsersCount
export const getCurrentPageSelector = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetchingSelector = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingInProgressSelector = (state: AppStateType) => state.usersPage.followingInProgress
