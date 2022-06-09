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
let initialState:AuthType = {
    id: null as unknown as number,
    email: null as unknown as string,
    login: null as unknown as string,
    isFetching: false,
    isAuth: false,
}

const AuthReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {
switch (action.type) {
    case "SET-USER-DATA":
        debugger
        return {...state, ...action.payload.data, isAuth: true}
    default:
        return state
}
};

export type AuthReducerType = SetAuthUserDataType

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: DataType ) => ({type: "SET-USER-DATA", payload:{data}} as const)

export default AuthReducer;
