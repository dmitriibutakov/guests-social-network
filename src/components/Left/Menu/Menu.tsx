import React from 'react';
import s from "./Menu.module.scss"
import {images} from '../../../03_commons/images/dir/icons';
import CustomLink from "./CustomLink";
import {useAppSelector} from "../../../02_BLL/store";

const Menu = () => {
    const theme = useAppSelector(state => state.app.darkMode)
    return (
        <div className={s.menu}>
            <div className={s.header}>
                <div className={theme ? s.dark__title : s.title}>Guests</div>
            </div>
            <ul className={s.list}>
                <CustomLink image={images.profileImg} name={"profile"}/>
                <CustomLink image={images.chatImg} name={"dialogs"}/>
                <CustomLink image={images.usersImg} name={"users"}/>
                <CustomLink image={images.settingsImg} name={"settings"}/>
            </ul>
        </div>
    );
};

export default Menu;
