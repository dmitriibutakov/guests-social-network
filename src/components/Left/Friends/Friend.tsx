import React from 'react';
import s from "./Friend.module.css";
import message from "../../../cons/icons/message.png"
import {FriendPropsType} from "./FriendContainer";


const Friend: React.FC<FriendPropsType> = ({usersBlock}) => {

    return (
        <>
            {usersBlock.users.map((el) => {
                return (
                    <div key={el.id} className={s.friend}>
                        <img
                            src={el.avatar}
                            alt="avatar" className={s.avatar}/>
                        <div className={s.user}>
                            <div className={s.name}>{el.name}</div>
                            <div className={s.city}>{el.city}</div>
                        </div>
                        <img src={message} alt="message" className={s.message}/>
                    </div>
                )
            })}
        </>
    )
}
export default Friend;
