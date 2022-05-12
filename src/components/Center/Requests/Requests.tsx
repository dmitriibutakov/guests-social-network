import React from 'react';
import s from "./Requests.module.css"
import ava from "../../../cons/friends/friend3.png";
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";

const Requests = () => {
    return (
        <div className={s.body}>
            <div className={s.title}>Requests</div>
            <div className={s.main}>
                <div className={s.main__user}>
                    <div className={s.user__link}>
                        <img src={ava} alt="story"/>
                    </div>
                    <div className={s.user__info}>
                        <div className={s.name}>Anna julia</div>
                        <div className={s.profession}>web designer</div>
                    </div>
                </div>
                <div className={s.main__btns}>
                    <UniversalBtn className={s.decline} name={"Decline"} callback={() => {
                    }}/>
                    <UniversalBtn name={"Accept"} callback={() => {
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Requests;
