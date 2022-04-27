import React, {ChangeEvent} from 'react';
import s from "./NewPost.module.css"
import dots from "../../../cons/icons/dots.png"
import visible from "../../../cons/icons/Send/visible.png"
import img from "../../../cons/icons/Send/img.png"
import smile from "../../../cons/icons/Send/smile.png"
import like from "../../../cons/icons/Send/like.png"
import add from "../../../cons/icons/Send/add.png"
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/posts-reducer";
import {DispatchType} from "../../../Redux/redux-store";
import NewPost from "./NewPost";

type NewPostType = {
    inputText: string
    dispatch: DispatchType
}
const NewPostContainer: React.FC<NewPostType> = ({inputText, dispatch}) => {
    const addPost = () => {
        let action = addPostActionCreator()
        dispatch(action)
    }
    const updateNewPostText = (event: ChangeEvent<HTMLInputElement>) => {
        let action = updateNewPostTextActionCreator(event)
        dispatch(action)
    }
    return (
        <NewPost updateNewPostText={updateNewPostText}
                 addPost={addPost}
                 inputText={inputText}/>
    )
};

export default NewPostContainer;
