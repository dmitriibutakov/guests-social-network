import {authAPI} from "../01_DAL/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./store";
import {errorUtils} from "./errors-utils";
import {AxiosError} from "axios";

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

//types
export type AuthReducerType = SetAuthType | StopSubmitType
type StopSubmitType = ReturnType<typeof stopSubmit>
type SetAuthType = ReturnType<typeof setAuth>

//actions
const setAuth = (id: number, email: string, login: string, isAuth: boolean) =>
    ({type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const)

//thunks
export const getAuthUserDataTC = (): AppThunk => async dispatch => {
    try {
        const res = await authAPI.authMe()
        if (res.data.resultCode === 0) {
            const {id, email, login} = res.data.data
            dispatch(setAuth(id, email, login, true))
        }
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }

}
export const logInTC = (email: string,
                        password: string,
                        rememberMe: boolean): AppThunk => async dispatch => {
        try {
            const res = await authAPI.login(email, password, rememberMe)
            res.data.resultCode === 0 ?
                dispatch(getAuthUserDataTC()) :
                dispatch(stopSubmit("login", {_error: res.data.messages}))
        } catch (err) {
            errorUtils(err as Error | AxiosError, dispatch)
        }
    }
export const logOutTC = (): AppThunk => async dispatch => {
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuth(null as unknown as number, "", "", false))
        }
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}

export default AuthReducer;
