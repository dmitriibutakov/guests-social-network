import React from "react"
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../../Redux/redux-store";
import {
    followAC,
    FriendType,
    setCurrentPageAC,
    setFriendsAC,
    setUsersCountAC,
    unfollowAC
} from "../../../Redux/friends-reducer";
import Friends from "./Friends";


type MapStateToPropsType = {
    friends: FriendType[]
    pageSize: number
    usersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setFriends: (refreshFriends: FriendType[]) => void
    setCurrentPage: (countNumber: number) => void
    setUsersCount: (totalCount: number) => void
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        usersCount: state.FriendsPage.totalUsersCount,
        currentPage: state.FriendsPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: DispatchType):MapDispatchToPropsType => {
    return {
        follow: (userID)=> {dispatch(followAC(userID))},
        unfollow: (userID)=> dispatch(unfollowAC(userID)),
        setFriends: (refreshFriends)=> dispatch(setFriendsAC(refreshFriends)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setUsersCount: (totalCount) => dispatch(setUsersCountAC(totalCount)),
    }
}

export type  FriendsPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(Friends)
