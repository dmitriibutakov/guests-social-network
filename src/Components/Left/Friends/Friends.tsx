import React from 'react';
import s from "./Friends.module.css";
import FriendContainer from './FriendContainer';
const Friends = () => {
    return (
        <>
            <div className={s.title}>Friends <span className={s.contactsPush}>25</span></div>
            <div>
                <FriendContainer/>
            </div>
        </>
    );
};

export default Friends;
