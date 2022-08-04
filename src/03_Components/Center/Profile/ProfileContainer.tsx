import React, {ComponentType, useEffect} from "react"
import {AppStateType} from "../../../01_BLL/store";
import {connect} from "react-redux";
import s from "../Center.module.css";
import PostsContainer from "./Posts/PostsContainer";
import Profile from "./Profile";
import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import {addPost, getProfileTC, PostType, ProfileURLType, updateStatusTC} from "../../../01_BLL/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import {withRouter} from "../../../01_BLL/withRouter";
import {compose} from "redux";
import {withAuthRedirect} from "../../HIghOrderComponents/AuthRedirect";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    addPost: (newText: string) => void
    getProfileTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


const ProfileContainer = (props: ProfilePropsType) => {
    const {
        profile, addPost, posts, isFetching, updateStatusTC, status
    } = props
    let {userId} = useParams<'userId'>()

    useEffect(() => {
            async function fetchData() {
                const response = await props.getProfileTC(userId ||`${props.profileId}`)
            }
            fetchData();
        }, [])

    return (
        <>
            {isFetching ? <div className={s.center__block_preloader}><Preloader/></div> : <div className={s.center__block}>
                <Profile status={status} updateStatus={updateStatusTC} profile={profile}/>
            </div>}

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
        profile: state.ProfilePage.profile,
        posts: state.ProfilePage.posts,
        isFetching: state.ProfilePage.isFetching,
        status: state.ProfilePage.status,
        profileId: state.Auth.id
    }
}
export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {addPost, getProfileTC, updateStatusTC}),
    withAuthRedirect,
    withRouter)(ProfileContainer)
