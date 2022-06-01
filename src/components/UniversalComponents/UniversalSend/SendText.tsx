import React, {ChangeEvent} from 'react'
import s from "./SendText.module.css"
import add from "../../../cons/icons/Send/add.png"
import send from "../../../cons/icons/Send/send.png"
import like from "../../../cons/icons/Send/like.png"
import sms from "../../../cons/icons/Send/sms.png"
import smile from "../../../cons/icons/Send/smile.png"
import img from "../../../cons/icons/Send/img.png"
import {DialogsPageType} from "../../../Redux/dialogs-reducer";

type SendTextType = {
    state: DialogsPageType
    onChangeCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    onClickCallBack: () => void
}
const SendText: React.FC<SendTextType> = ({
                                              state,
                                              onChangeCallBack,
                                              onClickCallBack
                                          }) => {
    return (
        <div className={s.footer}>
            <div className={s.footer__likes}>
                <div className={s.footer__link}>
                    <img src={like} alt="like2"/>
                </div>
                <div className={s.footer__likes_count}>3.5k</div>
            </div>
            <div className={s.footer__sms}>
                <div className={s.footer__link}>
                    <img src={sms} alt="sms"/>
                </div>
            </div>
            <div className={s.footer__input}>
                <input type={"text"}
                       className={s.input}
                       placeholder={"Write a comment..."}
                       value={state.newMessageText}
                       onChange={onChangeCallBack}/>
            </div>
            <div className={s.footer__links}>
                <div><img className={s.img} src={img} alt="images"/></div>
                <div><img className={s.img} src={smile} alt="smiles"/></div>
                <div><img className={s.img} src={add} alt="plus"/></div>
                <button onClick={onClickCallBack} className={s.button__send}><img src={send} alt="send"/></button>
            </div>
        </div>
    );
};

export default SendText;
