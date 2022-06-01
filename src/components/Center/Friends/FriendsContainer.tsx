import React from "react"
import {connect} from "react-redux";
import {
    followAC,
    FriendType,
    setCurrentPageAC,
    setFriendsAC, setIsFetchingAC,
    setUsersCountAC,
    unfollowAC
} from "../../../Redux/friends-reducer";
import axios from "axios";
import Friends from "./Friends";
import {AppStateType, DispatchType} from "../../../Redux/store";
import Preloader from "../../UniversalComponents/Preloader/Preloader";

class FriendsAPIContainer extends React.Component<FriendsPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.setIsFetching(false)
        })
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/>
            : null}
            <Friends pageSize={this.props.pageSize}
                     friends={this.props.friends}
                     usersCount={this.props.usersCount}
                     currentPage={this.props.currentPage}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     onPageChanged={this.onPageChanged}/>
        </>
    }
}

type MapStateToPropsType = {
    friends: FriendType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setFriends: (refreshFriends: FriendType[]) => void
    setCurrentPage: (countNumber: number) => void
    setUsersCount: (totalCount: number) => void
    setIsFetching: (IsFetching: boolean) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        usersCount: state.FriendsPage.totalUsersCount,
        currentPage: state.FriendsPage.currentPage,
        isFetching: state.FriendsPage.isFetching,
    }
}
const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setFriends: (refreshFriends) => dispatch(setFriendsAC(refreshFriends)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setUsersCount: (totalCount) => dispatch(setUsersCountAC(totalCount)),
        setIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching)),
    }
}

export type FriendsPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(FriendsAPIContainer)
