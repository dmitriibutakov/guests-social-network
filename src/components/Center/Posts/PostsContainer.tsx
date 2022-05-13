import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {PostsPageType} from "../../../Redux/posts-reducer";

type mapStateToPropsType = {
    postsPage: PostsPageType
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        postsPage: state.PostsPage
    }
}
const mapDipatchToProps = () => {
    return {}
}

export type PostsPropsType = mapStateToPropsType

const PostsContainer = connect(mapStateToProps, mapDipatchToProps)(Posts)
export default PostsContainer;
