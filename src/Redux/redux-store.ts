import {combineReducers, createStore} from "redux";
import ChatReducer, {ChatReducerACType} from "./chat-reducer";
import PostsReducer, {PostsReducerType} from "./posts-reducer";
import FriendsReducer, {FriendsReducerActionType} from "./friends-reducer";
import MenuUsersReducer, {MenuUsersReducerACType} from "./menu-users-reducer";

const rootReducer = combineReducers({
    PostsPage: PostsReducer,
    DialogsPage: ChatReducer,
    MenuUsers: MenuUsersReducer,
    FriendsPage: FriendsReducer
})
const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = (action: ChatReducerACType | FriendsReducerActionType | MenuUsersReducerACType | PostsReducerType) => void
export default store;
