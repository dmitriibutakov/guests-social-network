import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunk} from "./store";
import {IsFetchingType, setIsFetching} from "./actions/actions";
import {errorUtils} from "./errors-utils";
import {AxiosError} from "axios";

export type APPType = {
    initialized: boolean
    errorOfResponse: string | null
    isFetching: boolean
}

let initialState: APPType = {
    initialized: false,
    errorOfResponse: null,
    isFetching: false
}

const APPReducer = (state: APPType = initialState, action: APPReducerType): APPType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        case "SET-ERROR":
            return {...state, ...action}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
};

//types
export type APPReducerType = ReturnType<typeof setInitialized> | SetAppErrorType | IsFetchingType
export type SetAppErrorType = ReturnType<typeof setAppError>

//actions
export const setInitialized = () => ({type: 'SET-INITIALIZED'} as const)
export const setAppError = (errorOfResponse: string | null) => ({type: 'SET-ERROR', errorOfResponse} as const)

//thunks
export const initializeAppTC = (): AppThunk => async dispatch => {
    try {
        await dispatch(getAuthUserDataTC())
        dispatch(setInitialized())
    } catch (err) {
        errorUtils(err as Error | AxiosError, dispatch)
    } finally {
        dispatch(setIsFetching(false))
    }
}
export default APPReducer;
