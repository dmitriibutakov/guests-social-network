import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import DialogsReducer, {DialogsReducerType} from "./dialogs-reducer";
import ProfileReducer, {ProfileReducerType} from "./profile-reducer";
import AuthReducer, {AuthReducerType} from "./auth-reducer";
import UsersReducer, {UsersReducerType} from "./users-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer,
    app: appReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export default store;

export type AppReducersTypes = AuthReducerType | DialogsReducerType | ProfileReducerType | UsersReducerType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppReducersTypes>
