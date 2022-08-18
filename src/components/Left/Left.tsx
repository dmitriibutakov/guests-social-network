import React from 'react';
import Menu from "./Menu/Menu";
import s from "./Left.module.scss"
import SwitchMode from './SwitchMode/SwitchMode';
import {useAppSelector} from "../../02_BLL/store";

const Left = () => {
    const theme = useAppSelector(state => state.app.darkMode)
    const style = theme ? s.left__dark_block : s.left__block
    return (
        <div className={s.left}>
            <div className={style}>
                <Menu/>
            </div>
            <div className={style}>
                <SwitchMode/>
            </div>
        </div>
    );
};

export default Left;
