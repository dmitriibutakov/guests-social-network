import React from 'react';
import s from "./NewPost.module.css"

import UniversalBtn from "../../../../UniversalComponents/UniversalBtn/UniversalBtn";
import {imageImg, smileImg} from "../../../../../04_Images/dir/icons";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../Utils/validators/validators";
import UniversalInput from "../../../../UniversalComponents/UniversalInput/UniversalInput";

type NewPostType = {
    handleSubmit: any
}
const maxLengthPost = maxLengthCreator(10)
const NewPost: React.FC<NewPostType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2 className={s.title}>New Post</h2>
            <div className={s.input__block}>
                <Field validate={[required, maxLengthPost]}
                    component={UniversalInput}
                       type={"text"}
                       name={"addPostText"}
                       placeholder={"Write a Something...."}/>
            </div>
            <div className={s.send__block}>
                <div className={s.send__block_left}>
                    <div className={s.add}><img src={imageImg} alt=""/></div>
                    <div className={s.add}><img src={smileImg} alt=""/></div>
                </div>
                <UniversalBtn name={"Share"}/>
            </div>
        </form>
    );
};

export const NewPostReduxForm = reduxForm<{}, {onSubmit: any}, string>({form: "profileAddPost"})(NewPost)
