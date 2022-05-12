import React from 'react';
import s from "./FriendsChat.module.css"

type UsersDialogsType = {
    name: string
    text: string
    time: number
    ava: string
}

const FriendsChat: React.FC<UsersDialogsType> = (props) => {
    return (
        <div className={s.message}>
            <div className={s.ava__block}>
            <img src={props.ava} alt="avatar"/>
            </div>
            <div className={s.angle}/>
            <div className={s.user}>
                <h3 className={s.name}>{props.name}</h3>
                <div className={s.text}>{props.text}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default FriendsChat;
