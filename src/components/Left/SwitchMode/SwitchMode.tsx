import React from 'react';
import s from "./SwitchMode.module.scss"
import {setDarkMode} from "../../../02_BLL/app-reducer";
import {useAppDispatch, useAppSelector} from "../../../02_BLL/store";

const SwitchMode = () => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.app.darkMode)
    return (
        <>
            <div className={s.header}>
                <div className={theme ? s.darkTheme__title : s.title}>Switch Mode</div>
                <label className={s.switch}>
                    <input onClick={()=>dispatch(setDarkMode(!theme))} type="checkbox"/>
                    <span className={s.slider}></span>
                </label>
            </div>
            <p className={s.descr}>Switch your mode to get dark theme
                of your dashboard</p>
        </>
    );
};

export default SwitchMode;
