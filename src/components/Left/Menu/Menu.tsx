import React from 'react';
import s from "./Menu.module.css"
import logo from "../../../cons/icons/logo.png"
import user from "../../../cons/icons/user.png"
import edit from "../../../cons/icons/edit.png"
import chat from "../../../cons/icons/message.png"
import settings from "../../../cons/icons/settings.png"

import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.header}>
                <img className={s.logo} src={logo} alt="logo"/>
                <div className={s.title}>Guests</div>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <img src={chat} alt="Dialogs" className={s.icon}/>
                    <NavLink to="/dialogs"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <img src={user} alt="friends" className={s.icon}/>
                    <NavLink to="/friends"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Friends</NavLink>
                </li>
                <li className={s.item}>
                    <img src={edit} alt="Posts" className={s.icon}/>
                    <NavLink to="/profile"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Profile</NavLink>
                    <span className={s.contactsPush}>25</span>
                </li>
                <li className={s.item}>
                    <img src={settings} alt="Settings" className={s.icon}/>

                    <NavLink to="/settings"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Settings</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
