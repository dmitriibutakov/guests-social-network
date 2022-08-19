import React from 'react';
import s from "./Post.module.scss";
import {PostType} from "../../../../02_BLL/profile-reducer";
import {day, hours, minutes, month, year } from '../../../../03_commons/utils/helpers';

export const Post: React.FC<PostType> = ({
                                             message,
                                             id, avatar,
                                         }) => {


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

