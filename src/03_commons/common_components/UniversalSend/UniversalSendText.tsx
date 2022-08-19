import React from 'react'
import s from "./UniversalSendText.module.scss"
import {Field, reduxForm, reset} from "redux-form";
import UniversalInput from "../UniversalInput/UniversalInput";
import {required} from "../../utils/validators/validators";
import {images} from '../../images/dir/icons';

type SendTextType = {
    handleSubmit: any
}

const UniversalSendText: React.FC<SendTextType> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={s.sendText}>
            <div>
            </div>
            <div>
                <div className={s.sendText__link}>
                    <img src={images.likeImg} alt="like"/>
                </div>
            </div>
            <div className={s.sendText__input}>
                <Field component={UniversalInput}
                       validate={[required]}
                       name={"newMessageBody"}
                       placeholder={"Write a message..."}/>
            </div>
            <div>
            </div>
            <button className={s.button__send}><img src={images.sendImg} alt="send"/></button>
        </form>
    );
};

export default reduxForm<{}, { onSubmit: any }, string>({form: "dialogSendText" })(UniversalSendText)
