import {ChangeEvent} from "react";
import {v1} from "uuid";
import ava from "../cons/ava.png"
import dots from "../cons/icons/dots.png"
import photo1 from "../cons/posts/posts-photo-1.jpeg"
import photo2 from "../cons/posts/posts-photo-2.jpeg"
import photo3 from "../cons/posts/posts-photo-3.jpeg"
import photo4 from "../cons/posts/posts-photo-4.jpeg"

export type PostsPageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: string
    message: string
    likes: number
    ava: string
    dots: string
    photo1: string
    photo2: string
    photo3: string
    photo4: string
}

let initialState: PostsPageType = {
    posts: [
        {id: v1(), ava, dots, photo1, photo2, photo3, photo4, message: 'I find a new Collection', likes: 22},
        {id: v1(), ava, dots, photo1, photo2, photo3, photo4, message: 'Hi! It\'s my first post!', likes: 13}
    ],
    newPostText: " ",
}
const PostsReducer = (state: PostsPageType = initialState, action: PostsReducerType): PostsPageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likes: 5,
                ava, dots, photo1, photo2, photo3, photo4
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ""}
        case "UPDATE-NEW-POST":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
};

export type PostsReducerType = addPostACType | updateNewPostTextACType
type addPostACType = ReturnType<typeof addPostActionCreator>
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => ({type: "ADD-POST", newText: ""} as const)
export const updateNewPostTextActionCreator = (event: ChangeEvent<HTMLInputElement>) => {
    // debugger
    return (
        {type: "UPDATE-NEW-POST", newText: event.currentTarget.value} as const
    )
}

export default PostsReducer;
