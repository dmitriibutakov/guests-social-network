import React, {ChangeEvent} from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/chat-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../Redux/redux-store";


const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
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
const ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat)
export default ChatContainer;
