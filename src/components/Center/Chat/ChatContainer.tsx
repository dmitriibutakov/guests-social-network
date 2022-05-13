import React, {ChangeEvent} from "react";
import {addMessageActionCreator, DialogsPageType, updateNewMessageActionCreator} from "../../../Redux/chat-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";
import {AppStateType, DispatchType} from "../../../Redux/redux-store";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchToPropsType = {
    updateNewMessage: (event: ChangeEvent<HTMLInputElement>) => void
    addMessage: () => void
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch: DispatchType):mapDispatchToPropsType => {
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

export type ChatPropsType = mapStateToPropsType & mapDispatchToPropsType

const ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat)
export default ChatContainer;
