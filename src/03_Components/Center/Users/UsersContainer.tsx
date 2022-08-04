import React, {ComponentType, useEffect} from "react"
import {connect} from "react-redux";
import {UserType, UsersPageType, getUsersTC, unfollowTC, followTC, setCurrentPage} from "../../../01_BLL/users-reducer";
import {AppStateType} from "../../../01_BLL/store";
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
} from "../../../01_BLL/users-selectors";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    setCurrentPage: (page: number) => void
}
type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersAPIContainer: React.FC<UsersAPIPropsType> = (props) => {
    useEffect(() => {
        async function fetchData() {
            const response = await props.getUsersTC(props.currentPage, props.pageSize);
        }
        fetchData();
    }, [])

    const onPageChangedHandler = (pageNumber: number) => {
        props.getUsersTC(pageNumber, props.pageSize)
        props.setCurrentPage(pageNumber)
    }

    return (
        <>
            {props.isFetching ? <div className={s.center__block_preloader}><Preloader/></div>
                : <Users pageSize={props.pageSize}
                         users={props.users}
                         usersCount={props.usersCount}
                         currentPage={props.currentPage}
                         onPageChanged={onPageChangedHandler}
                         followingInProgress={props.followingInProgress}
                         follow={props.followTC}
                         unfollow={props.unfollowTC}/>}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
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
export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUsersTC, followTC, unfollowTC, setCurrentPage})
)
(UsersAPIContainer)
