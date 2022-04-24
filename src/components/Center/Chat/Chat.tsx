import React, {ChangeEvent} from "react";
import s from "./Chat.module.css"
import UsersChat from "./UsersChat/UsersChat";
import Users from "./Users/Users";
import SendText from "../../UniversalComponents/UniversalSend/SendText";
import {DialogsPageType, DispatchType} from "../../../Redux/redux-store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../Redux/chat-reducer";

type ChatType = {
    dispatch: DispatchType
    dialogsPage: DialogsPageType
}
const Chat:React.FC<ChatType> = ({dispatch, dialogsPage}) => {

    const userChat = dialogsPage.usersDialogs.map(el => <UsersChat ava={el.ava} name={el.name} text={el.text} time={el.time}/>);
    let user = dialogsPage.users.map(el => <Users name={el.name} id={el.id} ava={el.ava}/>);

    const onClickCallBack = () => {
        let action = addMessageActionCreator()
        dispatch(action)
    }
    const onChangeCallBack = (event: ChangeEvent<HTMLInputElement>) => {
        let action = updateNewMessageActionCreator(event)
        dispatch(action)
    }

    return (

        <div className={s.body}>
            <div className={s.body__users}>
                <div className={s.users}>
                    {user}
                </div>
                <div className={s.messages}>
                    {userChat}
                </div>
            </div>
            <SendText onClickCallBack={onClickCallBack}
                      onChangeCallBack={onChangeCallBack}
                      state={dialogsPage}/>
        </div>
    );
};

export default Chat;