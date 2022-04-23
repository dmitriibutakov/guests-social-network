import React from 'react';
import Menu from "./Menu/Menu";
import s from "./Left.module.css"
import ava1 from "../../cons/left/ava1.png"
import ava2 from "../../cons/left/ava2.png"
import ava3 from "../../cons/left/ava3.png"
import SwitchMode from "./SwitchMode/SwitchMode";
import Contacts from "./Contacts/Contacts";
import {v1} from "uuid";

const Left = () => {
    const leftPage = {
        users: [
            {avatar: ava1, name: 'Noora Hayes', id: v1(), city: "New York"},
            {avatar: ava2, name: 'Edward sarte', id: v1(),  city: "Paris"},
            {avatar: ava3, name: 'Emily Endresen', id: v1(),  city: "Los Angeles"},
        ]
    }
    return (
        <div className={s.left}>
            <div className={s.left__block}>
            <Menu/>
            </div>
            <div className={s.left__block}>
                <Contacts users={leftPage.users}/>
            </div>
            <div className={s.left__block}>
            <SwitchMode/>
            </div>
        </div>
    );
};

export default Left;