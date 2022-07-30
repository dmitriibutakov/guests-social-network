import React, {ComponentType} from "react"
import {connect} from "react-redux";
import {UserType, UsersPageType, getUsersTC, unfollowTC, followTC, setCurrentPage} from "../../../BLL/users-reducer";
import {AppStateType} from "../../../BLL/store";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import Users from "./Users";
import {compose} from "redux";
import s from "../Center.module.css";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getUsersCountSelector,
    getUsersSuperSelector
} from "../../../BLL/users-selectors";

class UsersAPIContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <> {this.props.isFetching ? <div className={s.center__block_preloader}> <Preloader/></div>
            : <Users pageSize={this.props.pageSize}
                     users={this.props.users}
                     usersCount={this.props.usersCount}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     followingInProgress={this.props.followingInProgress}
                     follow={this.props.followTC}
                     unfollow={this.props.unfollowTC}/>}
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
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    setCurrentPage: (page: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.UsersPage,
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        usersCount: getUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersTC, followTC, unfollowTC, setCurrentPage})
)
(UsersAPIContainer)
