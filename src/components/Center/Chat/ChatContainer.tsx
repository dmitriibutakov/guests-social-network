import React, {ChangeEvent} from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/chat-reducer";
import Chat from "./Chat";
import s from "../Center.module.css";
import StoreContext from "../../../StoreContext";

const ChatContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const addMessage = () => {
                    let action = addMessageActionCreator()
                    store.dispatch(action)
                }
                const updateNewMessage = (event: ChangeEvent<HTMLInputElement>) => {
                    let action = updateNewMessageActionCreator(event)
                    store.dispatch(action)
                }

                return (
                    <div className={s.center__block}>
                        <Chat updateNewMessage={updateNewMessage} addMessage={addMessage} dialogsPage={store.getState().DialogsPage}/>
                    </div>
                )
            }
        }
        </StoreContext.Consumer>
    );
};

export default ChatContainer;
