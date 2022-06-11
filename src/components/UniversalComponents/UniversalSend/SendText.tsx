import React, {ChangeEvent} from 'react'
import s from "./SendText.module.css"
import {DialogsPageType} from "../../../Redux/dialogs-reducer";
import {likeImg, pictureImg, sendImg, smileImg} from "../../../images/dir/icons";

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
                    <img className={s.img} src={smileImg} alt="images"/>
                </div>
            </div>
            <div>
                <div className={s.sendText__link}>
                    <img src={likeImg} alt="like"/>
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
                    <img className={s.img} src={pictureImg} alt="images"/>
                </div>
            </div>

            <button onClick={onClickCallBack} className={s.button__send}><img src={sendImg} alt="send"/></button>
        </div>
    );
};

export default SendText;
