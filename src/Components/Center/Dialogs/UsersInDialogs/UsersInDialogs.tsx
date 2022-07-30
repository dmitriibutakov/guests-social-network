import React from "react";
import s from "./UsersInDialogs.module.css";
import {NavLink} from "react-router-dom";
import {UserInDialType} from "../../../../BLL/dialogs-reducer";
import {incognito} from "../../../../Images/dir/icons";


const UsersInDialogs: React.FC<UserInDialType> = ({id, name}) => {
    let path = "/dialogs/" + id
    return (
        <NavLink to={path} className={s.user}>
            <span className={s.user__avatar}>
                    <img src={incognito} alt="avatar"/>
            </span>
            <span className={s.name}>{name}</span>
        </NavLink>
    )
}

export default UsersInDialogs;
