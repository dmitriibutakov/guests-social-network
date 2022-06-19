import React from "react"
import {connect} from "react-redux";
import {UserType, UsersPageType, getUsers, unfollow, follow, setCurrentPage} from "../../../Redux/users-reducer";
import {AppStateType} from "../../../Redux/store";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";

class UsersAPIContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/>
            : <Users
                pageSize={this.props.pageSize}
                users={this.props.users}
                usersCount={this.props.usersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>}
        </>
    }
}

type MapStateToPropsType = {
    state: UsersPageType
    users: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (page: number) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.UsersPage,
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        usersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}

export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType

export default compose(connect(mapStateToProps, {getUsers, follow, unfollow, setCurrentPage}), withAuthRedirect)(UsersAPIContainer)
