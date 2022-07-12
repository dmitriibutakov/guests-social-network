import {authAPI} from "../Api/api";
import {stopSubmit} from "redux-form";
import {AppReducersTypes, AppStateType, AppThunk} from "./store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {getAuthUserDataThunkCreator} from "./auth-reducer";

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

export type APPReducerType = ReturnType<typeof setInitialized>

export const setInitialized = () => ({type: 'SET-INITIALIZED'} as const)

export const initializeApp = ():AppThunk => async dispatch => {
   await dispatch(getAuthUserDataThunkCreator())
    dispatch(setInitialized())
}
export default APPReducer;
