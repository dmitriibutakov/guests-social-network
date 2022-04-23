import React from "react";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../../Redux/redux-store";


const Users: React.FC<UsersType> = ({id,ava,name}) => {
    let path = "/dialogs/" + id
    return (
        <NavLink to={path} className={classes.user}>
            <img className={classes.avatar}  src={ava}
                 alt="avatar"/>
            <span className={classes.name}>{name}</span>
        </NavLink>
    )
}

export default Users;