import React, {ComponentType, useEffect} from "react"
import {AppStateType} from "../../../02_BLL/store";
import {connect} from "react-redux";
import s from "../Center.module.css";
import PostsContainer from "./Posts/PostsContainer";
import Profile from "./Profile";
import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import {addPost, getProfileTC, updatePhotosTC, updateStatusTC} from "../../../02_BLL/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../03_commons/hoc/AuthRedirect";
import CenterPreloader from "../CenterPreloader/CenterPreloader";
import {withRouter} from "../../../03_commons/hoc/withRouter";

const ProfileContainer = (props: ProfilePropsType) => {
    const {
        profile, addPost, posts, isFetching,
        updateStatusTC, updatePhotosTC,
        status, profileId
    } = props
    let {userId} = useParams<'userId'>()

    useEffect(() => {
        async function fetchData() {
            await props.getProfileTC(userId || `${profileId}`)
        }

        fetchData();
    }, [userId])
    if (isFetching) return <CenterPreloader/>
    return (
        <>
            <div className={s.center__block}>
                <Profile status={status}
                         profileId={profileId}
                         updatePhotos={updatePhotosTC}
                         updateStatus={updateStatusTC}
                         profile={profile}/>
            </div>
            <div className={s.center__block}>
                <NewPostContainer addPost={addPost}/>
            </div>
            <div className={s.center__block}>
                <PostsContainer posts={posts}/>
            </div>
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        isFetching: state.app.isFetching,
        status: state.profilePage.status,
        profileId: state.auth.id
    }
}
export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        addPost,
        getProfileTC,
        updateStatusTC,
        updatePhotosTC
    }),
    withAuthRedirect,
    withRouter)(ProfileContainer)

//types
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    addPost: (newText: string) => void
    getProfileTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    updatePhotosTC: (photos: any) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType