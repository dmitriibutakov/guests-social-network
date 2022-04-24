import React from 'react';
import s from "./Menu.module.css"
import star from "../../../cons/icons/star.png"
import logo from "../../../cons/icons/logo.png"
import bookmark from "../../../cons/icons/bookmark.png"
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
                    <img src={chat} alt="Chat" className={s.icon}/>
                    <NavLink to="/chat"
                       className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Chat</NavLink>
                </li>
                <li className={s.item}>
                    <img src={star} alt="Events" className={s.icon}/>
                    <div
                       className={s.link}>Events</div>
                </li>
                <li className={s.item}>
                    <img src={bookmark} alt="Bookmarks" className={s.icon}/>
                    <div
                       className={s.link}>Bookmarks</div>
                </li>
                <li className={s.item}>
                    <img src={user} alt="Friends" className={s.icon}/>
                    <div
                       className={s.link}>Friends</div>
                </li>
                <li className={s.item}>
                    <img src={edit} alt="Posts" className={s.icon}/>
                    <NavLink to="/posts"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Posts</NavLink>
                    <span className={s.contactsPush}>25</span>
                </li>
                <li className={s.item}>
                    <img src={settings} alt="Settings" className={s.icon}/>
                    <div
                       className={s.link}>Settings</div>
                </li>
            </ul>
        </div>
    );
};

export default Menu;