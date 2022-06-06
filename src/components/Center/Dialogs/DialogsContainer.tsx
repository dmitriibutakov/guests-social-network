import {connect} from "react-redux";
import {addMessage, DialogsPageType, updateNewMessage,} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../../Redux/store";
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

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const DialogsContainer = connect(mapStateToProps,{addMessage, updateNewMessage})(Dialogs)
export default DialogsContainer;
