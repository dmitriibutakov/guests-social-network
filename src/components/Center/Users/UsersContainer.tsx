import React, {ComponentType, useEffect} from "react"
import {connect} from "react-redux";
import {getUsersTC, unfollowTC, followTC, setCurrentPage} from "../../../02_BLL/users-reducer";
import {AppStateType} from "../../../02_BLL/store";
import Users from "./Users";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getUsersCountSelector,
    getUsersSuperSelector
} from "../../../02_BLL/users-selectors";
import CenterPreloader from "../CenterPreloader/CenterPreloader";

const UsersAPIContainer: React.FC<UsersAPIPropsType> = (props) => {
    const {
        currentPage, pageSize,
        isFetching,
        getUsersTC, setCurrentPage,
        followTC, unfollowTC
    } = props
    useEffect(() => {
        async function fetchData() {
            await getUsersTC(currentPage, pageSize);
        }

        fetchData();
    }, [])

    const onPageChangedHandler = (pageNumber: number) => {
        getUsersTC(pageNumber, pageSize)
        setCurrentPage(pageNumber)
    }
    if (isFetching) return <CenterPreloader/>
    return (
        <Users
            {...props}
            onPageChanged={onPageChangedHandler}
            follow={followTC}
            unfollow={unfollowTC}/>)
}

const mapStateToProps = (state: AppStateType) => {
    return {
        theme: state.app.darkMode,
        state: state.usersPage,
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        usersCount: getUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}
export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        getUsersTC,
        followTC,
        unfollowTC,
        setCurrentPage
    })
)
(UsersAPIContainer)

//types
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    setCurrentPage: (page: number) => void
}
type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType

