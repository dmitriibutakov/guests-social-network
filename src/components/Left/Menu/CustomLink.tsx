import React from 'react';
import s from "./Menu.module.scss";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../02_BLL/store";

type LinkProps = {
    image: string
    name: string
}
const CustomLink: React.FC<LinkProps> = ({image, name}) => {
    const theme = useAppSelector(state => state.app.darkMode)
    return (
        <li className={s.item}>
            <img src={image} alt={`${name}`} className={s.icon}/>
            <NavLink to={`${name}`}
                     className={({isActive}) => {
                         return isActive ?
                             (theme ? `${s.darkTheme__link_active}` : `${s.link__active}`) :
                             (theme ? `${s.darkTheme__link}` : `${s.link}`)
                     }}>{name}</NavLink>
        </li>
    );
};

export default CustomLink;