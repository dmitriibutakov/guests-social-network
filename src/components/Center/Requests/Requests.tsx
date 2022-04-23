import React from 'react';
import s from "./Requests.module.css"
import story1 from "../../../cons/center/story1.png";
import UniversalBtn from "../../../UniversalBtn";

const Requests = () => {
    return (
        <div className={s.body}>
            <div className={s.title}>Requests</div>
            <div className={s.main}>
                <div className={s.main__user}>
                    <a href={"/"} className={s.user__img_link}>
                        <img className={s.user__img} src={story1} alt="story"/>
                    </a>
                    <div className={s.user__info}>
                        <div className={s.name}>Anna julia</div>
                        <div className={s.profession}>web designer</div>
                    </div>
                </div>
                <div className={s.main__btns}>
                    <UniversalBtn className={s.decline} name={"Decline"} onClick={()=>{}}/>
                    <UniversalBtn name={"Accept"} onClick={()=>{}}/>
                </div>
            </div>
        </div>
    );
};

export default Requests;