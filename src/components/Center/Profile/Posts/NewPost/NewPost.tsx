import React, {ChangeEvent} from 'react';
import s from "./NewPost.module.css"

import UniversalBtn from "../../../../UniversalComponents/UniversalBtn/UniversalBtn";
import {NewPostProps} from "./NewPostContainer";
import {imageImg, smileImg} from "../../../../../images/dir/icons";

const NewPost: React.FC<NewPostProps> = ({updateNewPostText, addPost, newPostText}) => {
    const onClickHandler = () => {
        addPost()
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        updateNewPostText(event)
    }
    return (
        <div>
            <h2 className={s.title}>New Post</h2>
            <div className={s.input__block}>
                <input type="text"
                       className={s.input}
                       onChange={onChangeHandler}
                       value={newPostText}
                       placeholder={"Write a Something...."}/>
            </div>
            <div className={s.send__block}>
                <div className={s.send__block_left}>
                    <div className={s.add}><img src={imageImg} alt=""/></div>
                    <div className={s.add}><img src={smileImg} alt=""/></div>
                </div>
                <UniversalBtn callback={onClickHandler} name={"Share"}/>
            </div>
        </div>
    );
};

export default NewPost;
