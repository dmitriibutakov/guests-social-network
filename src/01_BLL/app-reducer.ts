import {getAuthUserDataTC} from "./auth-reducer";
import {AppThunk} from "./store";
import {setIsFetching} from "./actions/actions";

export type APPType = {
    initialized: boolean
}

let initialState: APPType = {
    initialized: false
}

const APPReducer = (state: APPType = initialState, action: APPReducerType): APPType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
};

//actions
export const setInitialized = () => ({type: 'SET-INITIALIZED'} as const)

//thunks
export const initializeAppTC = (): AppThunk => async dispatch => {
    await dispatch(getAuthUserDataTC())
    dispatch(setInitialized())
    dispatch(setIsFetching(false))
}
//types
export type APPReducerType = ReturnType<typeof setInitialized>
export default APPReducer;
