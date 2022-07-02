import React from 'react'
import s from "./SendText.module.css"
import {likeImg, pictureImg, sendImg, smileImg} from "../../../images/dir/icons";
import {Field, reduxForm} from "redux-form";

type SendTextType = {
    handleSubmit: any
}
const SendText: React.FC<SendTextType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={s.sendText}>
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
                <Field component={"input"}
                       type={"text"}
                       name={"newMessageBody"}
                       className={s.input}
                       placeholder={"Write a comment..."}/>
            </div>
            <div>
                <div className={s.sendText__link}>
                    <img className={s.img} src={pictureImg} alt="images"/>
                </div>
            </div>
            <button className={s.button__send}><img src={sendImg} alt="send"/></button>
        </form>
    );
};

export const SendTextReduxForm = reduxForm<{}, { onSubmit: any }, string>({form: "dialogSendText"})(SendText)
