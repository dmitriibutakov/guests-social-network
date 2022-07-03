import {DispatchType} from "../../../Redux/store";

export type MetaType = {
    active: boolean
    asyncValidating: boolean
    autofilled: boolean
    dirty: boolean
    dispatch: DispatchType
    error: string
    form: string
    initial: string
    invalid: boolean
    pristine: boolean
    submitFailed: boolean
    submitting: boolean
    touched: boolean
    valid: boolean
    visited: boolean
    warning: string
}
