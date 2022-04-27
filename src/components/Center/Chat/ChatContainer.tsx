import React, {ChangeEvent} from "react";
import {DialogsPageType, DispatchType} from "../../../Redux/redux-store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/chat-reducer";
import Chat from "./Chat";

type ChatType = {
    dispatch: DispatchType
    dialogsPage: DialogsPageType
}
const ChatContainer: React.FC<ChatType> = ({dispatch, dialogsPage}) => {

    const addMessage = () => {
        let action = addMessageActionCreator()
        dispatch(action)
    }
    const updateNewMessage = (event: ChangeEvent<HTMLInputElement>) => {
        let action = updateNewMessageActionCreator(event)
        dispatch(action)
    }

    return (
        <Chat updateNewMessage={updateNewMessage} addMessage={addMessage} dialogsPage={dialogsPage}/>
    );
};

export default ChatContainer;
