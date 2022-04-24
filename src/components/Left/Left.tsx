import React from 'react';
import Menu from "./Menu/Menu";
import s from "./Left.module.css"
import SwitchMode from "./SwitchMode/SwitchMode";
import Contacts from "./Contacts/Contacts";
import { StateType} from "../../Redux/redux-store";
type LeftType = {
    state: StateType
}
const Left:React.FC<LeftType> = ({state}) => {
    return (
        <div className={s.left}>
            <div className={s.left__block}>
            <Menu/>
            </div>
            <div className={s.left__block}>
                <Contacts leftFriends={state.LeftFriends}/>
            </div>
            <div className={s.left__block}>
            <SwitchMode/>
            </div>
        </div>
    );
};

export default Left;