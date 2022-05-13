import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/posts-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../../Redux/redux-store";

type mapStateToPropsType = {
    newPostText: string
}
type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (event: ChangeEvent<HTMLInputElement>) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newPostText: state.PostsPage.newPostText
    }
}
const mapDispatchToProps = (dispatch: DispatchType):mapDispatchToPropsType => {
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

export type NewPostProps = mapStateToPropsType & mapDispatchToPropsType
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;
