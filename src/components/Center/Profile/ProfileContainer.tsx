import React, {ChangeEvent,useEffect} from "react"
import {AppStateType} from "../../../Redux/store";
import {connect} from "react-redux";
import s from "../Center.module.css";
import PostsContainer from "./Posts/PostsContainer";
import axios from "axios";
import Profile from "./Profile";
import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import {
    addPost,
    PostType,
    ProfileURLType,
    setUserProfile,
    updateNewPostText
} from "../../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import {setIsFetching} from "../../../Redux/actions/actions";
import {withRouter} from "../../../Redux/withRouter";


const ProfileAPIContainer = (props: ProfilePropsType) => {
    const {
        profile,
        updateNewPostText,
        newPostText,
        addPost,
        posts,
        isFetching,
    } = props
    const {userId} = useParams<'userId'>()

    useEffect(() => {
        props.setIsFetching(true)
        function setUserId() {
           return !userId ? '23985' : userId
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + setUserId()).then(response => {
            props.setIsFetching(false)
            props.setUserProfile(response.data)
        })
    }, [])
    return (
        <>
        {isFetching ? <Preloader/> : null}
        <>
            <div className={s.center__block}>
                <Profile profile={profile}/>
            </div>
            <div className={s.center__block}>
                <NewPostContainer updateNewPostText={updateNewPostText} newPostText={newPostText}
                addPost={addPost}/>
            </div>
            <div className={s.center__block}>
                <PostsContainer posts={posts}/>
            </div>
        </>
        </>
    )
}

type MapStateToPropsType = {
    newPostText: string
    posts: Array<PostType>
    profile: ProfileURLType
    isFetching: boolean
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (event: ChangeEvent<HTMLInputElement>) => void
    setUserProfile: (id: string) => void
    setIsFetching: (IsFetching: boolean) => void
}


export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText,
        isFetching: state.ProfilePage.isFetching,
    }
}

export default connect(mapStateToProps, {setUserProfile, addPost, updateNewPostText, setIsFetching})(withRouter(ProfileAPIContainer))
