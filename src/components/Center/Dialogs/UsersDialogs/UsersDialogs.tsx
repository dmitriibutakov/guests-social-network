import React from "react";
import s from "./UsersDialogs.module.css"
import {UserDialogType} from "../../../../Redux/dialogs-reducer";
import {incognito} from "../../../../images/dir/icons";

const UsersDialogs: React.FC<UserDialogType> = (props) => {
    return (
        <div className={s.message}>
            <div className={s.ava__block}>
                <img src={incognito} alt="avatar"/>
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

export default UsersDialogs;
