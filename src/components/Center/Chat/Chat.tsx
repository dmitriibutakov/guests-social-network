import React, {ChangeEvent} from "react";
import s from "./Chat.module.css"
import SendText from "../../UniversalComponents/UniversalSend/SendText";
import UsersChat from "./UsersChat/UsersChat";
import Users from "./Users/Users";
import {ChatPropsType} from "./ChatContainer";

const Chat: React.FC<ChatPropsType> = ({dialogsPage, updateNewMessage, addMessage}) => {

    const userChat = dialogsPage.usersDialogs.map(el => <UsersChat id={el.id} key={el.id} ava={el.ava} name={el.name} text={el.text}
                                                                   time={el.time}/>);
    let user = dialogsPage.users.map(el => <Users key={el.id} name={el.name} id={el.id} ava={el.ava}/>);

    const onClickCallBack = () => {
        addMessage()
    }
    const onChangeCallBack = (event: ChangeEvent<HTMLInputElement>) => {
        updateNewMessage(event)
    }
    return (
        <div className={s.center__block}>
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
        </div>
    );
};

export default Chat;
