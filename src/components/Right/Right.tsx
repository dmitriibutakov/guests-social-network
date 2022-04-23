import React from 'react';
import s from "./Right.module.css"
import Profile from "./Profile/Profile";
import Photos from "./Photos/Photos";
import Messages from "./Messages/Messages";

const Right = () => {
    return (
        <div className={s.right}>
            <div className={s.right__block}>
                <Profile/>
            </div>
            <div className={s.right__block}>
                <Photos/>
            </div>
            <div className={s.right__block}>
                <Messages/>
            </div>
        </div>
    );
};

export default Right;