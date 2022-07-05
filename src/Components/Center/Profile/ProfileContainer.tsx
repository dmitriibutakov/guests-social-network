import React, {ComponentType, useEffect} from "react"
import {AppStateType} from "../../../Redux/store";
import {connect} from "react-redux";
import s from "../Center.module.css";
import PostsContainer from "./Posts/PostsContainer";
import Profile from "./Profile";
import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import {addPost, getProfile, PostType, ProfileURLType, updateStatus} from "../../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import {withRouter} from "../../../Redux/withRouter";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HIghOrderComponents/AuthRedirect";

type MapStateToPropsType = {
    posts: Array<PostType>
    profile: ProfileURLType
    isFetching: boolean
    status: string
}
type MapDispatchToPropsType = {
    addPost: (newText: string) => void
    getProfile: (userId: string) => void
    updateStatus: (status: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


const ProfileContainer = (props: ProfilePropsType) => {
    const {
        profile, addPost, posts, isFetching, updateStatus, status
    } = props
    let {userId} = useParams<'userId'>()

    useEffect(() => {
        props.getProfile(userId || '23985')
    }, [])

    return (
        <>
            {isFetching ? <div className={s.center__block_preloader}><Preloader/></div> : <div className={s.center__block}>
                <Profile status={status} updateStatus={updateStatus} profile={profile}/>
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        posts: state.ProfilePage.posts,
        isFetching: state.ProfilePage.isFetching,
        status: state.ProfilePage.status,
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {addPost, getProfile, updateStatus}),
    withAuthRedirect,
    withRouter)(ProfileContainer)
