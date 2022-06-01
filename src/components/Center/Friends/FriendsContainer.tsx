import React from "react"
import {connect} from "react-redux";
import {
    setFollow,
    FriendType,
    setCurrentPage,
    setFriends,
    setIsFetching,
    setUsersCount,
    setUnfollow
} from "../../../Redux/friends-reducer";
import axios from "axios";
import Friends from "./Friends";
import {AppStateType} from "../../../Redux/store";
import Preloader from "../../UniversalComponents/Preloader/Preloader";

class FriendsAPIContainer extends React.Component<FriendsPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setFriends(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setFriends(response.data.items)
        })
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/>
            : null}
            <Friends pageSize={this.props.pageSize}
                     friends={this.props.friends}
                     usersCount={this.props.usersCount}
                     currentPage={this.props.currentPage}
                     follow={this.props.setFollow}
                     unfollow={this.props.setUnfollow}
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
    setFollow: (userID: string) => void
    setUnfollow: (userID: string) => void
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

export type FriendsPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {
    setFollow,
    setUnfollow,
    setFriends,
    setCurrentPage,
    setUsersCount,
    setIsFetching,
})(FriendsAPIContainer)
