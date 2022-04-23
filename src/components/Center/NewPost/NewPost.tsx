import React from 'react';
import s from "./NewPost.module.css"
import dots from "../../../cons/center/icon1.png"
import ava from "../../../cons/center/ava.png"
import visible from "../../../cons/center/visible.png"
import img from "../../../cons/center/img.png"
import smile from "../../../cons/center/smile.png"
import like from "../../../cons/center/like.png"
import add from "../../../cons/center/add.png"
import Input from "./Input";
import UniversalBtn from "../../../UniversalBtn";

const NewPost = () => {
    const setClassInput = s.input_custom
    return (
        <div>
<div className={s.header}>
    <h2 className={s.title}>New Post</h2>
    <a href={"./"}><img className={s.img} src={dots} alt="dots"/></a>
</div>
<div className={s.main}>
    <img className={s.ava} src={ava} alt="avatar"/>
    <Input className={setClassInput} placeholder={"Write a Something...."}/>
</div>
<div className={s.footer}>
    <div className={s.footer__main}>
    <span>Visible for</span>
    <button className={s.visible}>Friends <img src={visible} alt="icon"/></button>
    <a href={"./"} className={s.add}><img src={img} alt=""/></a>
    <a href={"./"} className={s.add}><img src={smile} alt=""/></a>
    <a href={"./"} className={s.add}><img src={like} alt=""/></a>
    <a href={"./"} className={s.add}><img src={add} alt=""/></a>
    </div>
    <UniversalBtn name={"Share"} onClick={()=>{}}/>
</div>
        </div>
    );
};

export default NewPost;