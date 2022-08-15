import React from 'react';
import s from "./NewPost.module.css"
import UniversalBtn from "../../../../../03_commons/common_components/UniversalBtn/UniversalBtn";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../03_commons/utils/validators/validators";
import UniversalInput from "../../../../../03_commons/common_components/UniversalInput/UniversalInput";
import { images } from '../../../../../03_commons/images/dir/icons';

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
                    <div className={s.add}><img src={images.imageImg} alt=""/></div>
                    <div className={s.add}><img src={images.smileImg} alt=""/></div>
                </div>
                <UniversalBtn name={"Share"}/>
            </div>
        </form>
    );
};

export const NewPostReduxForm = reduxForm<{}, {onSubmit: any}, string>({form: "profileAddPost"})(NewPost)
