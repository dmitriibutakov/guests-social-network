import {ChangeEvent} from "react";
import {ActionType, PostsPageType} from "./redux-store";
import {v1} from "uuid";
import ava from "../cons/ava.png"
import dots from "../cons/icons/dots.png"
import photo1 from "../cons/posts/posts-photo-1.jpeg"
import photo2 from "../cons/posts/posts-photo-2.jpeg"
import photo3 from "../cons/posts/posts-photo-3.jpeg"
import photo4 from "../cons/posts/posts-photo-4.jpeg"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-TEXT"

let initialState = {
    posts: [
        {id: v1(), ava,dots,photo1,photo2,photo3,photo4, message: 'I find a new Collection', likes: 22},
        {id: v1(), ava,dots,photo1,photo2,photo3,photo4, message: 'Hi! It\'s my first post!', likes: 13}
    ],
    newPostText: " ",
}
const PostsReducer = (state: PostsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likes: 5,
                ava, dots,photo1,photo2,photo3,photo4
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: "" }
        case "UPDATE-NEW-TEXT":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST, newText: ""})
export const updateNewPostTextActionCreator = (event: ChangeEvent<HTMLInputElement>) => {
    // debugger
    return (
        {type: UPDATE_NEW_POST, newText: event.currentTarget.value}
    )
}

export default PostsReducer;
