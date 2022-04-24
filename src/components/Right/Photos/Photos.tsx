import React from 'react';
import s from "./Photos.module.css"
import dots from "../../../cons/icons/dots.png"
import photo1 from "../../../cons/right/photo1.png"
import photo2 from "../../../cons/right/photo2.png"
import photo3 from "../../../cons/right/photo3.png"
import photo4 from "../../../cons/right/photo4.png"
import photo5 from "../../../cons/right/photo5.png"
import photoAdd from "../../../cons/right/photoAdd.png"

const Photos = () => {
    return (
        <div className={s.body}>
            <div className={s.header}>
                <div>
                    <h4 className={s.name}>Photos</h4>
                    <div className={s.desc}>5 Pictures upladed</div>
                </div>
                <div className={s.block__dots}>
                    <img src={dots} alt=""/>
                </div>
            </div>
            <div className={s.photos}>
                <div className={s.photo}>
                <img src={photo1} alt="photo1"/>
                </div>
                <div className={s.photo}>
                <img src={photo2} alt="photo2"/>
                </div>
                    <div className={s.photo}>
                <img src={photo3} alt="photo3"/>
                    </div>
                        <div className={s.photo}>
                <img src={photo4} alt="photo4"/>
                        </div>
                            <div className={s.photo}>
                <img src={photo5} alt="photo5"/>
                            </div>
                                <div className={s.photo}>
                <div><img src={photoAdd} alt="add"/></div>
                                </div>
            </div>
        </div>
    );
};

export default Photos;