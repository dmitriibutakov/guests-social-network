import React from 'react';
import Menu from "./Menu/Menu";
import s from "./Left.module.css"
import SwitchMode from "./SwitchMode/SwitchMode";

const Left = () => {
    return (
        <div className={s.left}>
            <div className={s.left__block}>
                <Menu/>
            </div>
           {/* <div className={s.left__block}>
                <SwitchMode/>
            </div>*/}
        </div>
    );
};

export default Left;
