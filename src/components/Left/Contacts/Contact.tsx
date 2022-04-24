import React from 'react';
import s from "./Contact.module.css";
import message from "../../../cons/icons/message.png"
import {FriendsType} from "../../../Redux/redux-store";

const Contact: React.FC<FriendsType> = (props) => {
    return (
        <div className={s.friend}>
            <img
                src={props.avatar}
                alt="avatar" className={s.avatar}/>
            <div className={s.user}>
                <div className={s.name}>{props.name}</div>
                <div className={s.city}>{props.city}</div>
            </div>
            <img src={message} alt="message" className={s.message}/>
        </div>
    )
}

export default Contact;