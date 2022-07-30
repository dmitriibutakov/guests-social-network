import {authAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./store";

export type AuthType = {
    id: number
    email: string
    login: string
    isFetching: boolean
    isAuth: boolean
}

let initialState: AuthType = {
    id: null as unknown as number,
    email: null as unknown as string,
    login: null as unknown as string,
    isFetching: false,
    isAuth: false,
}

const AuthReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload}
        default:
            return state
    }
};

//actions
const setAuth = (id: number, email: string, login: string, isAuth: boolean) =>
    ({type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const)

//thunks
export const getAuthUserDataTC = (): AppThunk => async dispatch => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        const {id, email, login} = res.data.data
        dispatch(setAuth(id, email, login, true))
    }
}

export const logInTC =
    (email: string, password: string, rememberMe: boolean): AppThunk =>
        async dispatch => {
            const res = await authAPI.login(email, password, rememberMe)
            res.data.resultCode === 0 ?
                dispatch(getAuthUserDataTC()) :
                dispatch(stopSubmit("login", {_error: res.data.messages}))
        }


export const logOutTC = (): AppThunk => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuth(null as unknown as number, "", "", false))
    }
}

//types
export type AuthReducerType = SetAuthType | StopSubmitType
type StopSubmitType = ReturnType<typeof stopSubmit>
type SetAuthType = ReturnType<typeof setAuth>

export default AuthReducer;
