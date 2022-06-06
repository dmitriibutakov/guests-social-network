import {combineReducers, createStore} from "redux";
import MenuUsersReducer, {MenuUsersReducerACType} from "./menu-users-reducer";
import DialogsReducer, {DialogsReducerType} from "./dialogs-reducer";
import ProfileReducer, {ProfileReducerType} from "./profile-reducer";
import FriendsReducer, {FriendsReducerType} from "./friends-reducer";

const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    MenuUsers: MenuUsersReducer,
    FriendsPage: FriendsReducer
})
const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = (action: DialogsReducerType | FriendsReducerType | MenuUsersReducerACType | ProfileReducerType) => void
export default store;
