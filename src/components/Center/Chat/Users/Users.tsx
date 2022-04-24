import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../../Redux/redux-store";


const Users: React.FC<UsersType> = ({id,ava,name}) => {
    let path = "/dialogs/" + id
    return (
        <NavLink to={path} className={s.user}>
            <span className={s.user__avatar}>
            <img className={s.avatar}  src={ava}
                 alt="avatar"/>
                </span>
            <span className={s.name}>{name}</span>
        </NavLink>
    )
}

export default Users;