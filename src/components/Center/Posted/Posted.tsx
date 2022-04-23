import React from 'react';
import s from "./Posted.module.css"
import ava from "../../../cons/center/ava.png"
import dots from "../../../cons/center/icon1.png"
import photo1 from "../../../cons/center/post-photo-1.png"
import photo2 from "../../../cons/center/post-photo-2.png"
import photo3 from "../../../cons/center/post-photo-3.png"
import SendText from '../../UniversalComponents/UniversalSend/SendText';



const Posted = () => {
    return (
        <div className={s.body}>
            <div className={s.header}>
                <div className={s.header__user}>
                    <div className={s.ava}><img src={ava} alt="avatar"/></div>
                    <div>
                    <h4 className={s.name}>Ginny Churchills</h4>
                    <div className={s.time}>September 20, 2020</div>
                    </div>
                </div>
                <a href={"./"} className={s.dots}><img src={dots} alt="images"/></a>
            </div>
            <div className={s.main}>
                <div className={s.main__post}>
                    <div className={s.main__post_text}>I love my new Collections</div>
                    <div className={s.main__post_tags}>
                        <a href={"./"} className={s.tag}>#photos</a>
                        <a href={"./"} className={s.tag}>#wallpaper</a>
                        <a href={"./"} className={s.tag}>#new</a>
                        <a href={"./"} className={s.tag}>#models</a>
                    </div>
                </div>
                <div className={s.main__photos}>
                    <div className={s.photos__left}><img src={photo1} alt="photo1"/></div>
                    <div className={s.photos__right}>
                        <div className={s.row}><img src={photo2} alt="photo2"/></div>
                        <div className={s.row}><img src={photo3} alt="photo3"/></div>
                    </div>
                </div>
            </div>
<SendText/>
        </div>
    );
};

export default Posted;