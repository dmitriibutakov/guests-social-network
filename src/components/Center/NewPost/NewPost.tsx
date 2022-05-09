import React, {ChangeEvent} from 'react';
import s from "./NewPost.module.css"
import dots from "../../../cons/icons/dots.png"
import visible from "../../../cons/icons/Send/visible.png"
import img from "../../../cons/icons/Send/img.png"
import smile from "../../../cons/icons/Send/smile.png"
import like from "../../../cons/icons/Send/like.png"
import add from "../../../cons/icons/Send/add.png"
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";

type NewPostType = {
    updateNewPostText: (event: ChangeEvent<HTMLInputElement>) => void
    addPost: () => void
    newPostText: string
}
const NewPost: React.FC<NewPostType> = ({updateNewPostText, addPost, newPostText}) => {
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
                <div className={s.dots}><img src={dots} alt="dots"/></div>
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
