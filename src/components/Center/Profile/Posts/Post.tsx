import React from 'react';
import s from "./Post.module.css";
import {PostType} from "../../../../02_BLL/profile-reducer";

export const Post: React.FC<PostType> = ({
                                             message,
                                             id, avatar,
                                         }) => {

    const day = new Date().getDay()
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    console.log("post")
    return (
        <div className={s.body} key={id}>
            <div className={s.user__ava}><img src={avatar} alt="avatar"/></div>
            <div>
                <h4 className={s.user__name}>{"profile"}</h4>
                <div className={s.user__text}>{message}</div>
            </div>
            <div className={s.date}>
                {hours}:{minutes} {day}.{month}.{year}
            </div>
        </div>

    );
};

