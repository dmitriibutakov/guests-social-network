import {IsFetchingType, setIsFetching} from "./actions/actions";
import {profileAPI} from "../01_DAL/api";
import {AppThunk} from "./store";
import {errorUtils} from "./errors-utils";
import {AxiosError} from "axios";
import {numberInit, stringInit} from "./inits";
import {images} from "../03_commons/images/dir/icons";

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileURLType
    status: string,
}
export type FilePhotosType = {
    small: string, large: string
}
export type ProfileURLType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: { small: string, large: string}
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
    avatar: string
    id: number
    message: string
    likes: number
}
let initialState: ProfilePageType = {
    profile: {
        aboutMe: stringInit,
        userId: numberInit,
        lookingForAJob: null as unknown as boolean,
        lookingForAJobDescription: stringInit,
        fullName: stringInit,
        contacts: {
            github: stringInit,
            vk: stringInit,
            facebook: stringInit,
            instagram: stringInit,
            twitter: stringInit,
            website: stringInit,
            youtube: stringInit,
            mainLink: stringInit,
        },
        photos: {small: stringInit, large: stringInit}
    },
    posts: [
        {avatar: images.incognito, id: 1, message: 'I find a new Collection', likes: 22},
        {avatar: images.incognito, id: 2, message: 'Hi! It\'s my first post!', likes: 13}
    ],
    status: "",
}

const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileReducersType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                avatar: images.incognito,
                id: Math.random(),
                message: action.newText,
                likes: 5,
            }
            return {...state, posts: [newPost, ...state.posts]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        case "SET-PHOTOS":
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
};

export type ProfileReducersType = ReturnType<typeof setUserProfile>
    | ReturnType<typeof addPost>
    | ReturnType<typeof setStatus> | ReturnType<typeof setPhotos>

//actions
export const addPost = (newText: string) => ({type: "ADD-POST", newText} as const)
const setUserProfile = (profile: ProfileURLType) => ({type: "SET-USER-PROFILE", profile} as const)
const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)
const setPhotos = (photos: any) => ({type: "SET-PHOTOS", photos} as const)

//thunks
export const getProfileTC = (userId: string): AppThunk => async dispatch => {
    try {
        dispatch(setIsFetching(true))
        const response = await profileAPI.getProfile(userId)
        const response2 = await profileAPI.getStatus(userId)
        await (
            dispatch(setUserProfile(response.data)),
                dispatch(setStatus(response2.data))
        )
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    } finally {
        dispatch(setIsFetching(false))
    }
}
export const updateStatusTC = (status: string): AppThunk => async dispatch => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) dispatch(setStatus(status))
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}
export const updatePhotosTC = (photos: any): AppThunk => async dispatch => {
    try {
        const response = await profileAPI.fetchPhoto(photos)
        if (response.data.resultCode === 0) dispatch(setPhotos(photos))
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}

export default ProfileReducer;