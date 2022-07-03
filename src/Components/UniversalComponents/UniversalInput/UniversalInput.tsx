import React from 'react';
import s from "./UniversalInput.module.css";
import {warningImg} from "../../../Images/dir/icons";
import {MetaType} from "./universalInputTypes";

type UniversalInputPropsType = {
    input: object
    meta: MetaType
    props: { placeholder: string, type: string, name: string }
}
const UniversalInput: React.FC<UniversalInputPropsType> = ({input, meta, ...props}) => {
    const metaData = meta.touched && meta.error
    return (
        <div className={s.input__block}>
            <input {...props} {...input} className={metaData ? s.error__input : s.input}/>
            <div className={s.error__block}>
                {metaData && <img className={s.error__img} src={warningImg} alt="img"/>}
            </div>
        </div>
    );
};

export default UniversalInput;
