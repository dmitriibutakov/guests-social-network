import React from 'react';
import s from "./SwitchMode.module.css"
const SwitchMode = () => {
    return (
        <div className={s.body}>
            <div className={s.header}>
                <div className={s.title}>Switch Mode</div>
                <label className={s.switch}>
                    <input type="checkbox"/>
                        <span className={s.slider}></span>
                </label>
            </div>
            <p className={s.descr}>Switch your mode to get dark theme
                of your dashboard</p>
        </div>
    );
};

export default SwitchMode;