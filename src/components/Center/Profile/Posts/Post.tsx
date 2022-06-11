import React from 'react';
import s from "./Post.module.css";
import {PostType} from "../../../../Redux/profile-reducer";

export const Post: React.FC<PostType> = ({
                                             message,
                                             id,
                                         }) => {

    const day = new Date().getDay()
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    return (
        <div className={s.body} key={id}>
            <div className={s.user__ava}><img src="" alt="avatar"/></div>
            <div>
                <h4 className={s.user__name}>Ginny Churchills</h4>
                <div className={s.user__text}>{message}</div>
            </div>
            <div className={s.date}>
                {hours}:{minutes} {day}.{month}.{year}
            </div>
        </div>

    );
};

