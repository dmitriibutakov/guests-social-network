import React from 'react';
import s from "./Posts.module.css";
import {PostType} from "../../../Redux/posts-reducer";

type PostElType = PostType

export const Post: React.FC<PostElType> = ({
                                      ava,
                                      message,
                                      dots,
                                      id,
                                      photo1,
                                      photo2,
                                      photo3,
                                      photo4
                                  }) => {
    return (
        <div className={s.body} key={id}>
            <div className={s.header}>
                <div className={s.header__user}>
                    <div className={s.ava}><img src={ava} alt="avatar"/></div>
                    <div>
                        <h4 className={s.name}>Ginny Churchills</h4>
                        <div className={s.time}>September 20, 2020</div>
                    </div>
                </div>
                <div className={s.dots}><img src={dots} alt="images"/></div>
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
                        <div className={s.row1}><img src={photo1} alt="photo2"/></div>
                        <div className={s.row2}><img src={photo4} alt="photo3"/></div>
                    </div>
                    <div className={s.photos__column}>
                        <div className={s.row3}><img src={photo2} alt="photo2"/></div>
                        <div className={s.row4}><img src={photo3} alt="photo3"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

