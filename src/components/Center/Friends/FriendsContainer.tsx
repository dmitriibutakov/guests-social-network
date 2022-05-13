import React from "react"
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../../Redux/redux-store";
import {followAC, FriendsPageType, FriendType, setFriendsAC, unfollowAC} from "../../../Redux/friends-reducer";
import Friends from "./Friends";


type MapStateToPropsType = {
    friendsBlock: FriendsPageType
}
type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setFriends: (refreshFriends: FriendType[]) => void
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        friendsBlock: state.FriendsPage
    }
}
const mapDispatchToProps = (dispatch: DispatchType):MapDispatchToPropsType => {
    return {
        follow: (userID: string)=> {dispatch(followAC(userID))},
        unfollow: (userID: string)=> dispatch(unfollowAC(userID)),
        setFriends: (refreshFriends: FriendType[])=> dispatch(setFriendsAC(refreshFriends)),
    }
}

export type  FriendsPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(Friends)
