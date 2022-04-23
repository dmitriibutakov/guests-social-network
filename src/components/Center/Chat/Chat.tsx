import React from 'react';
import s from "./Chat.module.css"
import UsersChat from "./UsersChat/UsersChat";
import Users from "./Users/Users";
import {v1} from "uuid";
import me from "../../../cons/center/story4.png"
import lisa from "../../../cons/center/story3.png"
import mike from "../../../cons/center/story2.png"
import emily from "../../../cons/center/story1.png"
import SendText from "../../UniversalComponents/UniversalSend/SendText";

const Chat = () => {
    let initialState = {
        users: [
            {name: 'Mike', id: v1(), ava: mike},
            {name: 'Lisa', id: v1(), ava: lisa},
            {name: 'Emily Martin', id: v1(), ava: emily},
        ],
        usersDialogs: [
            {name: 'Lisa', text: 'Hello', time: 22.14, ava: lisa},
            {name: 'Me', text: 'How are you?', time: 22.24, ava: me},
            {name: 'Lisa', text: 'I love you', time: 22.34, ava: lisa},
            {name: 'Me', text: 'Love you 2', time: 22.44, ava: me}
        ],
        newMessageText: " ",
    }
    const userChat = initialState.usersDialogs.map(el => <UsersChat ava={el.ava} name={el.name} text={el.text} time={el.time}/>);
    let user = initialState.users.map(el => <Users name={el.name} id={el.id} ava={el.ava}/>);

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
            <SendText/>
        </div>
    );
};

export default Chat;