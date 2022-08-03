import React from 'react';
import s from "./UniversalInput.module.css";
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
            {metaData && <div className={s.error__block}></div>}
        </div>
    );
};

export default UniversalInput;
