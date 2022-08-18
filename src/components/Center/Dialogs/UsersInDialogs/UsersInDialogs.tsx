import React from "react";
import s from "./UsersInDialogs.module.scss";
import {NavLink} from "react-router-dom";
import {UserInDialType} from "../../../../02_BLL/dialogs-reducer";
import {images} from "../../../../03_commons/images/dir/icons";
import {useAppSelector} from "../../../../02_BLL/store";


const UsersInDialogs: React.FC<UserInDialType> = ({id, name}) => {
    const theme = useAppSelector(state => state.app.darkMode)
    const linkTheme = theme ? s.link__dark : s.link
    let path = "/dialogs/" + id
    return (
        <NavLink to={path} className={s.user}>
            <span className={s.user__avatar}>
                    <img src={images.incognito} alt="avatar"/>
            </span>
            <span className={linkTheme}>{name}</span>
        </NavLink>
    )
}

export default UsersInDialogs;
