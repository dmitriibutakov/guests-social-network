import React from "react";
import s from "./UsersInDialogs.module.scss";
import {NavLink, useParams} from "react-router-dom";
import {setDialog, UserInDialType} from "../../../../02_BLL/dialogs-reducer";
import {images} from "../../../../03_commons/images/dir/icons";


const UsersInDialogs: React.FC<UserInDialType & {setDialog: (name: string) => void, darkMode: boolean}> = ({id, name, setDialog, darkMode}) => {
    const {userName} = useParams<'userName'>()
    const linkTheme = darkMode ? s.link__dark : s.link
    const path = `/dialogs/` + userName
    return (
        <NavLink to={path} onClick={()=> setDialog(name)} className={s.user}>
            <span className={s.user__avatar}>
                    <img src={images.incognito} alt="avatar"/>
            </span>
            <span className={linkTheme}>{name}</span>
        </NavLink>
    )
}

export default UsersInDialogs;
