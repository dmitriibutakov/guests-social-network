import React, {ChangeEvent} from 'react';
import s from "./NewPost.module.css"
import visible from "../../../../../cons/icons/Send/visible.png"
import img from "../../../../../cons/icons/Send/img.png"
import smile from "../../../../../cons/icons/Send/smile.png"
import like from "../../../../../cons/icons/Send/like.png"
import add from "../../../../../cons/icons/Send/add.png"
import UniversalBtn from "../../../../UniversalComponents/UniversalBtn/UniversalBtn";
import {NewPostProps} from "./NewPostContainer";

const NewPost: React.FC<NewPostProps> = ({updateNewPostText, addPost, newPostText}) => {
    const onClickHandler = () => {
        addPost()
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        updateNewPostText(event)
    }
    return (
        <div>
            <div className={s.header}>
                <h2 className={s.title}>New Post</h2>
            </div>
            <div className={s.main}>
                <input type="text"
                       className={s.input}
                       onChange={onChangeHandler}
                       value={newPostText}
                       placeholder={"Write a Something...."}/>
            </div>
            <div className={s.footer}>
                <div className={s.footer__main}>
                    <span>Visible for</span>
                    <button className={s.visible}>Friends <img src={visible} alt="icon"/></button>
                    <div className={s.add}><img src={img} alt=""/></div>
                    <div className={s.add}><img src={smile} alt=""/></div>
                    <div className={s.add}><img src={like} alt=""/></div>
                    <div className={s.add}><img src={add} alt=""/></div>
                </div>
                <UniversalBtn callback={onClickHandler} name={"Share"}/>
            </div>
        </div>
    );
};

export default NewPost;
