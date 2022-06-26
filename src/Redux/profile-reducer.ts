import {ChangeEvent} from "react";
import {IsFetchingType, setIsFetching} from "./actions/actions";
import {profileAPI} from "../Api/api";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileURLType
    isFetching: boolean,
    status: string,
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
    id: number
    message: string
    likes: number
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
        {id: Math.random(), message: 'I find a new Collection', likes: 22},
        {id: Math.random(), message: 'Hi! It\'s my first post!', likes: 13}
    ],
    newPostText: "",
    isFetching: false,
    status: "",
}

const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: Math.random(),
                message: state.newPostText,
                likes: 5,
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ""}
        case "UPDATE-NEW-POST":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
};

export type ProfileReducerType =
    addPostType
    | updateNewPostTextType
    | SetUserProfileType
    | IsFetchingType
    | SetStatusType
type addPostType = ReturnType<typeof addPost>
type updateNewPostTextType = ReturnType<typeof updateNewPostText>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetStatusType = ReturnType<typeof setStatus>

export const addPost = () => ({type: "ADD-POST", newText: ""} as const)
export const updateNewPostText = (event: ChangeEvent<HTMLInputElement>) => ({
    type: "UPDATE-NEW-POST",
    newText: event.currentTarget.value
} as const)
const setUserProfile = (profile: ProfileURLType) => ({type: "SET-USER-PROFILE", profile} as const)
const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)

export const getProfile = (userId: string) => (dispatch: (action: ProfileReducerType) => void) => {
    dispatch(setIsFetching(true))
    profileAPI.getProfile(userId)
        .then(response => {
            profileAPI.getStatus(userId)
                .then(response2 => {
                    dispatch(setIsFetching(false))
                    dispatch(setUserProfile(response.data))
                    dispatch(setStatus(response2.data))
                })
        })
}

export const updateStatus = (status: string) => (dispatch: (action: ProfileReducerType) => void) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default ProfileReducer;
