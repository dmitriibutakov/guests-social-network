import {combineReducers, createStore} from "redux";
import ChatReducer from "./chat-reducer";
import PostsReducer from "./posts-reducer";
import LeftFriendsReducer from "./left-friends-reducer";
import FriendsReducer, {followAC, setFriendsAC, unfollowAC} from "./friends-reducer";

export type StateType = {
    PostsPage: PostsPageType;
    DialogsPage: DialogsPageType;
    LeftFriends: LeftFriendsType;
    FriendsPage: FriendsPageType
}
export type LeftFriendsType = {
    friends: FriendsType[]
}
export type FriendsType = {
    avatar: string
    name: string
    id: string
    city: string
}
export type DialogsPageType = {
    users: Array<UsersType>
    usersDialogs: Array<UsersDialogsType>
    newMessageText: string
}
export type UsersType = {
    name: string
    id: string
    ava: string
}
export type UsersDialogsType = {
    id: string
    name: string
    text: string
    time: number
    ava: string
}
export type PostsPageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: string
    message: string
    likes: number
    ava:string
    dots:string
    photo1: string
    photo2: string
    photo3: string
    photo4: string
}

export type FriendsPageType = {
    friends: FriendType[]
}
export type FriendType = {
    name: string, followed: boolean, id: string, ava: string, status: string, location: { city: string, country: string }
}

const reducers = combineReducers({
    PostsPage: PostsReducer,
    DialogsPage: ChatReducer,
    LeftFriends: LeftFriendsReducer,
    FriendsPage: FriendsReducer
})
const store = createStore(reducers)

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setFriendsACType = ReturnType<typeof setFriendsAC>
export type FriendsReducerActionType = followACType | unfollowACType | setFriendsACType

export type DispatchType = (action: ActionType | FriendsReducerActionType) => void
export type ActionType = {
    type: string,
    newText: string
}

export default store;
