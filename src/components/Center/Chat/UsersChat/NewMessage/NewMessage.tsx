import React, {ChangeEvent} from 'react';
import classes from "./NewMessage.module.css";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../../Redux/chat-reducer";
import {DialogsPageType, DispatchType} from "../../../../../Redux/redux-store";

type NewMessageType = {
    dialogsPage: DialogsPageType
    dispatch: DispatchType
}


const NewMessage: React.FC<NewMessageType> = ({dialogsPage, dispatch}) => {
    const onClickHandler = () => {
        /*props.addMessage()*/
        let action = addMessageActionCreator()
        dispatch(action)
    }
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        /*props.updateNewMessage(event.currentTarget.value)*/
        let action = updateNewMessageActionCreator(event)
        dispatch(action)
    }

    return (
        <div className={classes.message}>
            <input type="text"
                   className={classes.textarea}
                   onChange={onChangeHandler}
                   value={dialogsPage.newMessageText}/>
            <button onClick={onClickHandler}
                    className={classes.buttonSend}>Send
            </button>
        </div>
    )
}

export default NewMessage;