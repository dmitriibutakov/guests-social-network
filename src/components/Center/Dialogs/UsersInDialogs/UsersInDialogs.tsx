import React from "react";
import s from "./UsersInDialogs.module.css";
import {NavLink} from "react-router-dom";
import {UserInDialType} from "../../../../Redux/dialogs-reducer";
import {incognito} from "../../../../images/dir/icons";


const UsersInDialogs: React.FC<UserInDialType> = ({id,name}) => {
    let path = "/dialogs/" + id
    return (
        <NavLink to={path} className={s.user}>
            <span className={s.user__avatar}>
            <img className={s.avatar} src={incognito} alt="avatar"/>
                </span>
            <span className={s.name}>{name}</span>
        </NavLink>
    )
}

export default UsersInDialogs;
