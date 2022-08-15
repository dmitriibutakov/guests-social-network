import {IsFetchingType, setIsFetching} from "./actions/actions";
import {profileAPI} from "../02_DAL/api";
import {AppThunk} from "./store";

export type ProfilePageType = {
    posts: Array<PostType>
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
    isFetching: false,
    status: "",
}

const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: Math.random(),
                message: action.newText,
                likes: 5,
            }
            return {...state, posts: [newPost, ...state.posts]}
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

export type ProfileReducerType = addPostType | SetUserProfileType | IsFetchingType | SetStatusType
type addPostType = ReturnType<typeof addPost>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetStatusType = ReturnType<typeof setStatus>

//actions
export const addPost = (newText: string) => ({type: "ADD-POST", newText} as const)
const setUserProfile = (profile: ProfileURLType) => ({type: "SET-USER-PROFILE", profile} as const)
const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)

//thunks
export const getProfileTC = (userId: string): AppThunk => async dispatch => {
        dispatch(setIsFetching(true))
        const res = await profileAPI.getProfile(userId)
        const res2 = await profileAPI.getStatus(userId)
        await (dispatch(setIsFetching(false)),
            dispatch(setUserProfile(res.data)),
            dispatch(setStatus(res2.data)))
}

export const updateStatusTC = (status: string): AppThunk => async dispatch => {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}

export default ProfileReducer;
