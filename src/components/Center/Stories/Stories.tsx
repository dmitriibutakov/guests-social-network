import React from 'react';
import s from './Stories.module.css'
import  story1 from "../../../cons/center/story1.png"
import  story2 from "../../../cons/center/story2.png"
import  story3 from "../../../cons/center/story3.png"
import  story4 from "../../../cons/center/story4.png"
import  addStory from "../../../cons/center/addStory.png"

const Stories = () => {
    return (
        <div className={s.body}>
            <div className={s.title}>Stories</div>
            <div className={s.stories}>
                <div className={s.stories__friends}>
                    <a href={"/"} className={s.story}>
                        <img className={s.story__img} src={story1} alt="story"/>
                    </a>
                    <a href={"/"} className={s.story}>
                        <img className={s.story__img} src={story2} alt="story"/>
                    </a>
                    <a href={"/"} className={s.story}>
                        <img className={s.story__img} src={story3} alt="story"/>
                    </a>
                    <a href={"/"} className={s.story}>
                        <img className={s.story__img} src={story4} alt="story"/>
                    </a>
                </div>
                <div className={s.stories__add}>
                <a href={"/"} className={s.story}>
                    <img className={s.story__img} src={addStory} alt="story"/>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Stories;