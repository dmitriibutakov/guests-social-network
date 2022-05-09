import React from 'react';
import s from "./Contact.module.css";
import message from "../../../cons/icons/message.png"
import {LeftFriendsType} from "../../../Redux/redux-store";

type ContactType = {
    friendsBlock: LeftFriendsType
}
const Contact: React.FC<ContactType> = ({friendsBlock}) => {

    return (
        <>
        {friendsBlock.friends.map((el) => {
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
export default Contact;
