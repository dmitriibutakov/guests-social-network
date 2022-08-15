import React from 'react';
import s from "./Menu.module.css";
import {images} from "../../../03_commons/images/dir/icons";
import {NavLink} from "react-router-dom";

type LinkProps = {
    image: string
    name: string
}
const CustomLink: React.FC<LinkProps> = ({image, name}) => {
    return (
        <li className={s.item}>
            <img src={image} alt={`${name}`} className={s.icon}/>
            <NavLink to={`${name}`}
                     className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>{name}</NavLink>
        </li>
    );
};

export default CustomLink;