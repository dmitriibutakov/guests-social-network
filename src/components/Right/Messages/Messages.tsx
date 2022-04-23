import React from 'react';
import s from "./Messages.module.css"
import dots from "../../../cons/right/icon1.png";
import message1 from "../../../cons/right/message1.png"
import message2 from "../../../cons/right/message2.png"
import message3 from "../../../cons/right/message3.png"

const Messages = () => {
    return (
        <div className={s.body}>
            <div className={s.header}>
                <div>
                    <h4 className={s.title}>Messages</h4>
                </div>
                <a href={"/"} className={s.block__dots}>
                    <img src={dots} alt="dots"/>
                </a>
            </div>
            <div className={s.main}>
                <div className={s.ava}><img src={message1} alt="ava1"/></div>
                <div className={s.message__column}>
                    <h4 className={s.name}>Mike</h4>
                    <p className={s.text}>Please share a latest bl...</p>
                </div>
                <div className={s.message__column}>
                    <div className={s.time}>12:10</div>
                    <div className={s.notification}>2</div>
                </div>
            </div>
            <div className={s.main}>
                <div className={s.ava}><img src={message2} alt="ava2"/></div>
                <div className={s.message__column}>
                    <h4 className={s.name}>Lisa</h4>
                    <p className={s.text}>hi can you please check...</p>
                </div>
                <div className={s.message__column}>
                    <div className={s.time}>12:10</div>
                </div>
            </div>
            <div className={s.main}>
                <div className={s.ava}><img src={message3} alt="ava3"/></div>
                <div className={s.message__column}>
                    <h4 className={s.name}>Emily Martin</h4>
                    <p className={s.text}>The resources that you h...</p>
                </div>
                <div className={s.message__column}>
                    <div className={s.time}>12:10</div>
                    <div className={s.notification}>5</div>
                </div>
            </div>
        </div>
    );
};

export default Messages;