import {combineReducers, createStore} from "redux";
import DialogsReducer, {DialogsReducerType} from "./dialogs-reducer";
import ProfileReducer, {ProfileReducerType} from "./profile-reducer";
import AuthReducer from "./auth-reducer";
import UsersReducer, {UsersReducerType} from "./users-reducer";
import MenuFriendsReducer, {MenuFriendsReducerACType} from "./menu-friends-reducer";

const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    MenuFriends: MenuFriendsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
})
const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = (action: DialogsReducerType | UsersReducerType | MenuFriendsReducerACType | ProfileReducerType) => void
export default store;

