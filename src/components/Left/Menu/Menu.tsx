import React from 'react';
import s from "./Menu.module.css"
import icon1 from "../../../cons/left/icon1.png"
import icon2 from "../../../cons/left/icon2.png"
import icon3 from "../../../cons/left/icon3.png"
import icon4 from "../../../cons/left/icon4.png"
import icon5 from "../../../cons/left/icon5.png"
import icon6 from "../../../cons/left/icon6.png"
import logo from "../../../cons/left/logo.png"

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.header}>
                <img className={s.logo} src={logo} alt="logo"/>
                <div className={s.title}>Guests</div>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <img src={icon1} alt="icon" className={s.icon}/>
                    <a href={"/chat"}
                       className={s.link}>Chat</a>
                </li>
                <li className={s.item}>
                    <img src={icon2} alt="icon1" className={s.icon}/>
                    <a href={"/events"}
                       className={s.link}>Events</a>
                </li>
                <li className={s.item}>
                    <img src={icon3} alt="icon2" className={s.icon}/>
                    <a href={"/bookmarks"}
                       className={s.link}>Bookmarks</a>
                </li>
                <li className={s.item}>
                    <img src={icon4} alt="icon3" className={s.icon}/>
                    <a href={"/friends"}
                       className={s.link}>Friends</a>
                </li>
                <li className={s.item}>
                    <img src={icon5} alt="icon4" className={s.icon}/>
                    <a href={"/posts"}
                       className={s.link__active}>Posts</a>
                    <span className={s.contactsPush}>25</span>
                </li>
                <li className={s.item}>
                    <img src={icon6} alt="icon5" className={s.icon}/>
                    <a href={"/settings"}
                       className={s.link}>Settings</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;