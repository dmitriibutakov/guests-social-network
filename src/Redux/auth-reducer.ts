import {authAPI} from "../Api/api";

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

export type AuthReducerType = SetAuthType

type SetAuthType = ReturnType<typeof setAuth>
type GetAuthUserDataType = ReturnType<typeof getAuthUserDataThunkCreator>

const setAuth = (id: number, email: string, login: string, isAuth: boolean) =>
    ({type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const)

export const getAuthUserDataThunkCreator = () => (dispatch: (action: AuthReducerType) => void) => {
    authAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuth(id, email, login, true))
        }
    })
}

export const logInThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: (action: AuthReducerType | GetAuthUserDataType) => void) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataThunkCreator())
        }
    })
}

export const logOutThunkCreator = () => (dispatch: (action: AuthReducerType | GetAuthUserDataType) => void) => {
    authAPI.logout().then(response => {
        console.log(response)
        if (response.data.resultCode === 0) {
            dispatch(setAuth( null as unknown as number,"","", false))
        }
    })
}
export default AuthReducer;
