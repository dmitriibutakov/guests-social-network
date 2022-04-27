import React, {ChangeEvent} from "react";
import s from "./Chat.module.css"
import UsersChat from "./UsersChat/UsersChat";
import Users from "./Users/Users";
import SendText from "../../UniversalComponents/UniversalSend/SendText";
import {DialogsPageType} from "../../../Redux/redux-store";

type ChatType = {
    dialogsPage: DialogsPageType
    updateNewMessage: (event: ChangeEvent<HTMLInputElement>) => void
    addMessage: () => void
}
const Chat: React.FC<ChatType> = ({dialogsPage, updateNewMessage, addMessage}) => {

    const userChat = dialogsPage.usersDialogs.map(el => <UsersChat ava={el.ava} name={el.name} text={el.text}
                                                                   time={el.time}/>);
    let user = dialogsPage.users.map(el => <Users name={el.name} id={el.id} ava={el.ava}/>);

    const onClickCallBack = () => {
        addMessage()
    }
    const onChangeCallBack = (event: ChangeEvent<HTMLInputElement>) => {
        updateNewMessage(event)
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
