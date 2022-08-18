import {connect} from "react-redux";
import {addMessage} from "../../../02_BLL/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../../02_BLL/store";
import {ComponentType} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../../03_commons/hoc/AuthRedirect";

const mapStateToProps = (state: AppStateType) => ({dialogsPage: state.dialogsPage})
export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs)

//types
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = { addMessage: (message: string) => void }
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
