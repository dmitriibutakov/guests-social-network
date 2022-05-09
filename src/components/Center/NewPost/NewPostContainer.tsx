import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/posts-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../Redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.PostsPage.newPostText
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action)
        },
        updateNewPostText: (event: ChangeEvent<HTMLInputElement>) => {
            let action = updateNewPostTextActionCreator(event)
            dispatch(action)
        }
    }
}
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;
