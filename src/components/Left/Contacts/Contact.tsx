import React from 'react';
import s from "./Contact.module.css";
import vector from "../../../cons/left/icon1.png"
import {UserType} from "./Contacts";

const Contact: React.FC<UserType> = (props) => {
    return (
        <a href={"/"} className={s.friend}>
            <img
                src={props.avatar}
                alt="avatar" className={s.avatar}/>
            <div className={s.user}>
                <div className={s.name}>{props.name}</div>
                <div className={s.city}>{props.city}</div>
            </div>
            <img src={vector} alt="message" className={s.message}/>
        </a>
    )
}

export default Contact;