import {ChangeEvent} from "react";
import {ActionType, ProfilePageType} from "./redux-store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'How are you?! You are Welcome!', likes: 22},
        {id: 2, message: 'Hi! It\'s my first post!', likes: 13}
    ],
    newPostText: " ",
}
const ProfileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: 0,
                message: state.newPostText,
                likes: 5
            }
            state.posts.push(newPost)
            state.newPostText = " "
            return state
        case "UPDATE-NEW-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST, newText: " "})
export const updateNewPostTextActionCreator = (event: ChangeEvent<HTMLInputElement>) => {
    // debugger
    return (
        {type: UPDATE_NEW_POST, newText: event.currentTarget.value}
    )
}

export default ProfileReducer;