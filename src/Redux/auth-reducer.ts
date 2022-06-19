import {authAPI} from "../Api/api";

export type AuthType = {
    id: number
    email: string
    login: string
    isFetching: boolean
    isAuth: boolean
}
export type DataType = {
    id: number
    email: string
    login: string
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
            return {...state, ...action.payload.data, isAuth: true}
        default:
            return state
    }
};

export type AuthReducerType = SetAuthType

type SetAuthType = ReturnType<typeof setAuth>
const setAuth = (data: DataType) => ({type: "SET-USER-DATA", payload: {data}} as const)

export const setAuthUserData = () => (dispatch: (action: AuthReducerType) => void) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuth(data))
        }
    })
}
export default AuthReducer;
