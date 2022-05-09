import {combineReducers, createStore} from "redux";
import ChatReducer from "./chat-reducer";
import PostsReducer from "./posts-reducer";
import LeftFriendsReducer from "./left-friends-reducer";

export type StateType = {
    PostsPage: PostsPageType;
    DialogsPage: DialogsPageType;
    LeftFriends: LeftFriendsType;
}
export type LeftFriendsType = {
    friends: Array<FriendsType>
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
export type StoreType= {
   state: StateType
    _callSubscriber: (_state: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionType) => any
    subscribe: (observer: (state: StateType) => void) => void
}


const reducers = combineReducers({
    PostsPage: PostsReducer,
    DialogsPage: ChatReducer,
    LeftFriends: LeftFriendsReducer
})
const store:StoreType = createStore(reducers)
//
// type ReducersType = {
//     PostPage: PostsPageType
//     DialogsPage: DialogsPageType
//     LeftFriends: LeftFriendsType
// }

export type DispatchType = (action: ActionType) => void
export type ActionType = {
    type: string,
    newText: string
}

export default store;
