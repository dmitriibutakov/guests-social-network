import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import DialogsReducer, {DialogsReducerType} from "./dialogs-reducer";
import ProfileReducer, {ProfileReducerType} from "./profile-reducer";
import AuthReducer from "./auth-reducer";
import UsersReducer, {UsersReducerType} from "./users-reducer";
import MenuFriendsReducer, {MenuFriendsReducerACType} from "./menu-friends-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    MenuFriends: MenuFriendsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = (action: DialogsReducerType | UsersReducerType | MenuFriendsReducerACType | ProfileReducerType) => void
export default store;

