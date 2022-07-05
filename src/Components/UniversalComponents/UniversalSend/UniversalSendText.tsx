import React from 'react'
import s from "./UniversalSendText.module.css"
import {likeImg, pictureImg, sendImg, smileImg} from "../../../Images/dir/icons";
import {Field, reduxForm} from "redux-form";
import UniversalInput from "../UniversalInput/UniversalInput";
import {required} from "../../../Utils/validators/validators";

type SendTextType = {
    handleSubmit: any
}

const UniversalSendText: React.FC<SendTextType> = ({handleSubmit}) => {
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
                <Field component={UniversalInput}
                       validate={[required]}
                       name={"newMessageBody"}
                       placeholder={"Write a message..."}/>
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

export default reduxForm<{}, { onSubmit: any }, string>({form: "dialogSendText"})(UniversalSendText)
