import React from 'react';
import s from "./Menu.module.css"
import logo from "../../../cons/logo.png"
import profile from "../../../cons/icons/profile.png"
import users from "../../../cons/icons/friends.png"
import chat from "../../../cons/icons/message.png"
import settings from "../../../cons/icons/settings.png"

import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.header}>
                <div className={s.title}>Guests</div>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <img src={profile} alt="profile" className={s.icon}/>
                    <NavLink to="/profile"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Profile</NavLink>
                    <span className={s.contactsPush}>25</span>
                </li>
                <li className={s.item}>
                    <img src={chat} alt="Dialogs" className={s.icon}/>
                    <NavLink to="/dialogs"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <img src={users} alt="users" className={s.icon}/>
                    <NavLink to="/users"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Users</NavLink>
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
