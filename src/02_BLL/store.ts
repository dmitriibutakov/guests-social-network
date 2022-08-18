import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import DialogsReducer, {DialogsReducerType} from "./dialogs-reducer";
import ProfileReducer, {ProfileReducersType} from "./profile-reducer";
import AuthReducer, {AuthReducerType} from "./auth-reducer";
import UsersReducer, {UsersReducerType} from "./users-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import {TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: appReducer
})
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export default store;

type RootStateType = ReturnType<typeof store.getState>
type AppDispatchType = ThunkDispatch<RootStateType, unknown, AppReducersTypes>

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export type AppReducersTypes = AuthReducerType | DialogsReducerType | ProfileReducersType | UsersReducerType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppReducersTypes>
