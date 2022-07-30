import {AppStateType} from "./store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

export const getUsersSelector = (state: AppStateType) => state.UsersPage.users
export const getUsersSuperSelector = createSelector(getUsersSelector, (users: UserType[]) => users)
export const getPageSizeSelector = (state: AppStateType) => state.UsersPage.pageSize
export const getUsersCountSelector = (state: AppStateType) => state.UsersPage.totalUsersCount
export const getCurrentPageSelector = (state: AppStateType) => state.UsersPage.currentPage
export const getIsFetchingSelector = (state: AppStateType) => state.UsersPage.isFetching
export const getFollowingInProgressSelector = (state: AppStateType) => state.UsersPage.followingInProgress
