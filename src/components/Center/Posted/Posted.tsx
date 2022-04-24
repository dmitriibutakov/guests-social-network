import React from 'react';
import s from "./Posted.module.css"
import {PostsType} from "../../../Redux/redux-store";

type PostedType = PostsType

const Posted:React.FC<PostedType> = ({id,
                                         message,
                                         likes,
                                         ...restProps
}) => {
    return (
        <div className={s.body}>
            <div className={s.header}>
                <div className={s.header__user}>
                    <div className={s.ava}><img src={restProps.ava} alt="avatar"/></div>
                    <div>
                    <h4 className={s.name}>Ginny Churchills</h4>
                    <div className={s.time}>September 20, 2020</div>
                    </div>
                </div>
                <div className={s.dots}><img src={restProps.dots} alt="images"/></div>
            </div>
            <div className={s.main}>
                <div className={s.main__post}>
                    <div className={s.main__post_text}>{message}</div>
                    <div className={s.main__post_tags}>
                        <div className={s.tag}>#photos</div>
                        <div className={s.tag}>#wallpaper</div>
                        <div className={s.tag}>#new</div>
                        <div className={s.tag}>#models</div>
                    </div>
                </div>
                <div className={s.main__photos}>
                    <div className={s.photos__column}>
                        <div className={s.row1}><img src={restProps.photo1} alt="photo2"/></div>
                        <div className={s.row2}><img src={restProps.photo4} alt="photo3"/></div>
                    </div>
                    <div className={s.photos__column}>
                        <div className={s.row3}><img src={restProps.photo2} alt="photo2"/></div>
                        <div className={s.row4}><img src={restProps.photo3} alt="photo3"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posted;