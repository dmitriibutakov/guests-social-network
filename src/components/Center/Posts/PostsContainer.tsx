import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        postsPage: state.PostsPage
    }
}

const mapDipatchToProps = () => {
    return {}
}

const PostsContainer = connect(mapStateToProps, mapDipatchToProps)(Posts)
export default PostsContainer;
