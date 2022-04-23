import React from 'react'
import s from "./SendText.module.css"
import add from "../../../cons/center/add.png"
import send from "../../../cons/center/send.png"
import Input from "../../Center/NewPost/Input"
import like2 from "../../../cons/center/like2.png"
import sms from "../../../cons/center/sms.png"
import smile from "../../../cons/center/smile.png"
import img from "../../../cons/center/img.png"

const SendText = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__left}></div>
            <div className={s.footer__likes}>
                <a href={"./"} className={s.footer__link}>
                    <img src={like2} alt="like2"/>
                </a>
                <div className={s.footer__likes_count}>3.5k</div>
            </div>
            <div className={s.footer__sms}>
                <a href={"./"} className={s.footer__link}>
                    <img src={sms} alt="sms"/>
                </a>
            </div>
            <div className={s.footer__input}>
                <Input placeholder={"Write a comment..."} className={s.input}/>
            </div>
            <div className={s.footer__links}>
                <a href={"./"} ><img className={s.img} src={img} alt="images"/></a>
                <a href={"./"} ><img className={s.img} src={smile} alt="smiles"/></a>
                <a href={"./"} ><img className={s.img} src={add} alt="plus"/></a>
                <button className={s.button__send}><img src={send} alt="send"/></button>
            </div>
        </div>
    );
};

export default SendText;