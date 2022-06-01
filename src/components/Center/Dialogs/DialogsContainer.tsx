import {connect} from "react-redux";
import {addMessageActionCreator, DialogsPageType, updateNewMessageActionCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType, DispatchType} from "../../../Redux/store";
import {ChangeEvent} from "react";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessage: (event: ChangeEvent<HTMLInputElement>) => void
    addMessage: () => void
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch: DispatchType):MapDispatchToPropsType => {
    return {
        updateNewMessage: (event: ChangeEvent<HTMLInputElement>)=> {
            let action = updateNewMessageActionCreator(event)
            dispatch(action)},
        addMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action)
        }
    }
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;
