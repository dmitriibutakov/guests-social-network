import axios, {AxiosError} from "axios";
import {Dispatch} from "redux";
import {setAppError, SetAppErrorType} from "./app-reducer";

export const errorUtils = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch<SetAppErrorType>) => {
    const err = e as Error | AxiosError<{ error: string }>
    if (axios.isAxiosError(err)) {
        console.log(err)
        const error = err ? err.message : err
        dispatch(setAppError(error))
    } else {
        dispatch(setAppError(`Native error ${err.message}`))
    }
}