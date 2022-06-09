import {ChangeEvent} from "react";
import {v1} from "uuid";
import ava from "../cons/ava.png"
import photo1 from "../cons/posts/posts-photo-1.jpeg"
import photo2 from "../cons/posts/posts-photo-2.jpeg"
import photo3 from "../cons/posts/posts-photo-3.jpeg"
import photo4 from "../cons/posts/posts-photo-4.jpeg"
import {IsFetchingType} from "./actions/actions";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileURLType
    isFetching: boolean
}
export type ProfileURLType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: { small: string, large: string }
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type PostType = {
    id: string
    message: string
    likes: number
    ava: string
    photo1: string
    photo2: string
    photo3: string
    photo4: string
}

let stringInitial = null as unknown as string
let initialState: ProfilePageType = {
    profile: {
        aboutMe: stringInitial,
        userId: null as unknown as number,
        lookingForAJob: null as unknown as boolean,
        lookingForAJobDescription: stringInitial,
        fullName: stringInitial,
        contacts: {
            github: stringInitial,
            vk: stringInitial,
            facebook: stringInitial,
            instagram: stringInitial,
            twitter: stringInitial,
            website: stringInitial,
            youtube: stringInitial,
            mainLink: stringInitial,
        },
        photos: {small: stringInitial, large: stringInitial}
    },
    posts: [
        {id: v1(), ava, photo1, photo2, photo3, photo4, message: 'I find a new Collection', likes: 22},
        {id: v1(), ava, photo1, photo2, photo3, photo4, message: 'Hi! It\'s my first post!', likes: 13}
    ],
    newPostText: "",
    isFetching: false,
}

const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likes: 5,
                ava, photo1, photo2, photo3, photo4
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ""}
        case "UPDATE-NEW-POST":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
};

export type ProfileReducerType = addPostType | updateNewPostTextType | SetUserProfileType | IsFetchingType
type addPostType = ReturnType<typeof addPost>
type updateNewPostTextType = ReturnType<typeof updateNewPostText>
type SetUserProfileType = ReturnType<typeof setUserProfile>

export const addPost = () => ({type: "ADD-POST", newText: ""} as const)
export const updateNewPostText = (event: ChangeEvent<HTMLInputElement>) => ({
    type: "UPDATE-NEW-POST",
    newText: event.currentTarget.value
} as const)
export const setUserProfile = (profile: ProfileURLType) => ({type: "SET-USER-PROFILE", profile} as const)

export default ProfileReducer;
