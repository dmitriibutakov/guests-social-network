import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/posts-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../../../Redux/store";

type MapStateToPropsType = {
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (event: ChangeEvent<HTMLInputElement>) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.PostsPage.newPostText
    }
}
const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
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

export type NewPostProps = MapStateToPropsType & MapDispatchToPropsType
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;
