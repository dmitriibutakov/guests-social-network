import {ChangeEvent} from "react";
import {v1} from "uuid";
import ava from "../cons/ava.png"
import photo1 from "../cons/posts/posts-photo-1.jpeg"
import photo2 from "../cons/posts/posts-photo-2.jpeg"
import photo3 from "../cons/posts/posts-photo-3.jpeg"
import photo4 from "../cons/posts/posts-photo-4.jpeg"

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileURLType
}
export type ProfileURLType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {small: string, large: string}
}
type ContactsType = {
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

let initialState: ProfilePageType = {
    profile: { aboutMe: '',
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {small: '', large: ''}},
    posts: [
        {id: v1(), ava, photo1, photo2, photo3, photo4, message: 'I find a new Collection', likes: 22},
        {id: v1(), ava, photo1, photo2, photo3, photo4, message: 'Hi! It\'s my first post!', likes: 13}
    ],
    newPostText: " ",
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
        default:
            return state
    }
};

export type ProfileReducerType = addPostType | updateNewPostTextType | SetUserProfileType
type addPostType = ReturnType<typeof addPost>
type updateNewPostTextType = ReturnType<typeof updateNewPostText>
type SetUserProfileType = ReturnType<typeof setUserProfile>

export const addPost = () => ({type: "ADD-POST", newText: ""} as const)
export const updateNewPostText = (event: ChangeEvent<HTMLInputElement>) => ({type: "UPDATE-NEW-POST", newText: event.currentTarget.value} as const)
export const setUserProfile = (profile: any) => ({type: "SET-USER-PROFILE", profile} as const)

export default ProfileReducer;
