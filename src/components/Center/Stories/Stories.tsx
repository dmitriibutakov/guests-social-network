import React from "react";
import s from "./Stories.module.css"
import story1 from "../../../cons/friends/friend6.png"
import story2 from "../../../cons/friends/friend7.png"
import story3 from "../../../cons/friends/friend8.png"
import story4 from "../../../cons/friends/friend9.png"
import addStory from "../../../cons/icons/addStory.png"

const Stories = () => {
    return (
        <div className={s.body}>
            <div className={s.title}>Stories</div>
            <div className={s.stories}>
                <div className={s.stories__friends}>
                    <div className={s.story}>
                        <img className={s.story__img} src={story1} alt="story"/>
                    </div>
                    <div className={s.story}>
                        <img className={s.story__img} src={story2} alt="story"/>
                    </div>
                    <div className={s.story}>
                        <img className={s.story__img} src={story3} alt="story"/>
                    </div>
                    <div className={s.story}>
                        <img className={s.story__img} src={story4} alt="story"/>
                    </div>
                </div>
                <div className={s.stories__add}>
                    <div className={s.story}>
                        <img className={s.story__img} src={addStory} alt="story"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
