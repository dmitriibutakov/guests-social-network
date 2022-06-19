import {connect} from "react-redux";
import {addMessage, DialogsPageType, updateNewMessage,} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../../Redux/store";
import {ChangeEvent} from "react";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    updateNewMessage: (event: ChangeEvent<HTMLInputElement>) => void
    addMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType):MapStateToPropsType => { return {dialogsPage: state.DialogsPage}}

export default compose(connect(mapStateToProps,{addMessage, updateNewMessage}),withAuthRedirect)(Dialogs)
