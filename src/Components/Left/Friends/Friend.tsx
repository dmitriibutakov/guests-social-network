import React from 'react';
import s from "./Friend.module.css";
import {FriendPropsType} from "./FriendContainer";
import {incognito, messageImg} from "../../../Images/dir/icons";


const Friend: React.FC<FriendPropsType> = ({friends}) => {

    return (
        <>
            {friends.friends.map((el) => {
                return (
                    <div key={el.id} className={s.friend}>
                        <img src={incognito}
                            alt="avatar" className={s.avatar}/>
                        <div className={s.user}>
                            <div className={s.name}>{el.name}</div>
                            <div className={s.city}>{el.city}</div>
                        </div>
                        <img src={messageImg} alt="message" className={s.message}/>
                    </div>
                )
            })}
        </>
    )
}
export default Friend;
