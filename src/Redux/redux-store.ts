import {combineReducers, createStore, EmptyObject} from "redux";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";

export type StateType = EmptyObject & { ProfilePage: ProfilePageType; DialogsPage: DialogsPageType; navSidebar: NavSidebarType; }
// {
//     navSidebar: NavSidebarType
//     dialogsPage: DialogsPageType
//     profilePage: ProfilePageType
//
// }
export type NavSidebarType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    name: string
    id: number
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
    name: string
    text: string
    time: number
}
export type PostsType = {
    id: number
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    navSidebar: SidebarReducer
})
let store = createStore(reducers)

export type DispatchType = (action: ActionType) => void
export type ActionType = {
    type: string,
    newText: string
}

export default store;