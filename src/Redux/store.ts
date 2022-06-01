import {combineReducers, createStore} from "redux";
import PostsReducer, {PostsReducerType} from "./posts-reducer";
import FriendsReducer, {FriendsReducerActionType} from "./friends-reducer";
import MenuUsersReducer, {MenuUsersReducerACType} from "./menu-users-reducer";
import DialogsReducer, {DialogsReducerACType} from "./dialogs-reducer";

const rootReducer = combineReducers({
    PostsPage: PostsReducer,
    DialogsPage: DialogsReducer,
    MenuUsers: MenuUsersReducer,
    FriendsPage: FriendsReducer
})
const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = (action: DialogsReducerACType | FriendsReducerActionType | MenuUsersReducerACType | PostsReducerType) => void
export default store;
