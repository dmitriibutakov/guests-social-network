import React, {ChangeEvent, ComponentType, useEffect} from "react"
import {AppStateType} from "../../../Redux/store";
import {connect} from "react-redux";
import s from "../Center.module.css";
import PostsContainer from "./Posts/PostsContainer";
import Profile from "./Profile";
import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import {
    addPost,
    getProfile,
    PostType,
    ProfileURLType,
    updateNewPostText, updateStatus
} from "../../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import {withRouter} from "../../../Redux/withRouter";
import {compose} from "redux";

type MapStateToPropsType = {
    newPostText: string
    posts: Array<PostType>
    profile: ProfileURLType
    isFetching: boolean
    status: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (event: ChangeEvent<HTMLInputElement>) => void
    getProfile: (userId: string) => void
    updateStatus: (status: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


const ProfileContainer = (props: ProfilePropsType) => {
    const {
        profile, updateNewPostText, newPostText, addPost, posts, isFetching, updateStatus, status
    } = props
    let {userId} = useParams<'userId'>()

    useEffect(() => {
      props.getProfile(userId || '23985')
    }, [])

    return (
        <>
            {isFetching && <Preloader/>}
            <div className={s.center__block}>
                <Profile status={status} updateStatus={updateStatus} profile={profile}/>
            </div>
            <div className={s.center__block}>
                <NewPostContainer updateNewPostText={updateNewPostText} newPostText={newPostText}
                                  addPost={addPost}/>
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
        newPostText: state.ProfilePage.newPostText,
        isFetching: state.ProfilePage.isFetching,
        status: state.ProfilePage.status,
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {
        addPost,
        updateNewPostText,
        getProfile,
        updateStatus,
    }),
    /*withAuthRedirect,*/
    withRouter)(ProfileContainer)
