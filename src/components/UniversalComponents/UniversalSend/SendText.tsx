import React, {ChangeEvent} from 'react'
import s from "./SendText.module.css"
import send from "../../../cons/icons/send.png"
import like from "../../../cons/icons/like.png"
import smile from "../../../cons/icons/smile.png"
import picture from "../../../cons/icons/picture.png"
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
        <div className={s.sendText}>
            <div>
                <div className={s.sendText__link}>
                    <img className={s.img} src={smile} alt="images"/>
                </div>
            </div>
            <div>
                <div className={s.sendText__link}>
                    <img src={like} alt="like"/>
                </div>
            </div>

            <div className={s.sendText__input}>
                <input type={"text"}
                       className={s.input}
                       placeholder={"Write a comment..."}
                       value={state.newMessageText}
                       onChange={onChangeCallBack}/>
            </div>
            <div>
                <div className={s.sendText__link}>
                    <img className={s.img} src={picture} alt="images"/>
                </div>
            </div>

            <button onClick={onClickCallBack} className={s.button__send}><img src={send} alt="send"/></button>
        </div>
    );
};

export default SendText;
