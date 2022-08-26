import {authAPI, securityAPI} from "../01_DAL/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./store";
import {errorUtils} from "./errors-utils";
import {AxiosError} from "axios";
import {numberInit, stringInit} from "./inits";

export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
    adminId: string
    captchaUrl: string
}

let initialState: AuthType = {
    id: numberInit,
    email: stringInit,
    login: stringInit,
    adminId: stringInit,
    isAuth: false,
    captchaUrl: stringInit
}

const AuthReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
        case "SET-CAPTCHA-URL":
            return {...state, ...action.payload}
        default:
            return state
    }
};

//types
export type AuthReducerType = SetAuthType | StopSubmitType | ReturnType<typeof setCaptchaUrl>
type StopSubmitType = ReturnType<typeof stopSubmit>
type SetAuthType = ReturnType<typeof setAuth>

//actions
const setAuth = (id: number, email: string, login: string, isAuth: boolean) =>
    ({type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const)

const setCaptchaUrl = (captchaUrl: string) =>
    ({type: "SET-CAPTCHA-URL", payload: {captchaUrl}} as const)

//thunks
export const getAuthUserDataTC = (): AppThunk => async dispatch => {
    try {
        const result = await authAPI.authMe()
        if (result.data.resultCode === 0) {
            const {id, email, login} = result.data.data
            dispatch(setAuth(id, email, login, true))
        }
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }

}
export const logInTC = (captcha:string = "", email: string,
                        password: string,
                        rememberMe: boolean): AppThunk => async dispatch => {
    try {
        console.log(captcha)
        const result = await authAPI.login(email, password, rememberMe, captcha)
        if (result.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else if (result.data.resultCode === 10) {
            dispatch(getCaptchaTC())
        } else {
            dispatch(stopSubmit("login", {_error: result.data.messages}))
        }
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}
export const logOutTC = (): AppThunk => async dispatch => {
    try {
        const result = await authAPI.logout()
        if (result.data.resultCode === 0) {
            dispatch(setAuth(null as unknown as number, "", "", false))
        }
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}

export const getCaptchaTC = (): AppThunk => async dispatch => {
    try {
        const result = await securityAPI.getCaptchaUrl()
        const captchaUrl = result.data.url
        dispatch(setCaptchaUrl(captchaUrl))
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    }
}

export default AuthReducer;
