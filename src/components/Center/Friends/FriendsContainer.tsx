import React from "react"
import {connect} from "react-redux";
import {DispatchType, FriendType, StateType} from "../../../Redux/redux-store";
import {followAC, setFriendsAC, unfollowAC} from "../../../Redux/friends-reducer";
import Friends from "./Friends";

const mapStateToProps = (state: StateType) => {
    return {
        friendsBlock: state.FriendsPage
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userID: string)=> {
            dispatch(followAC(userID))

        },
        unfollow: (userID: string)=> dispatch(unfollowAC(userID)),
        setFriends: (refreshFriends: FriendType[])=> dispatch(setFriendsAC(refreshFriends)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Friends)
