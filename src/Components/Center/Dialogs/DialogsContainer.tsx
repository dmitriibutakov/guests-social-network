import {connect} from "react-redux";
import {addMessage, DialogsPageType} from "../../../BLL/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../../BLL/store";
import {ComponentType} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HIghOrderComponents/AuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    addMessage: (message: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType):MapStateToPropsType => { return {dialogsPage: state.DialogsPage}}

export default compose<ComponentType>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs)
