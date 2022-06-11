import React from 'react';
import s from "./Right.module.css"
import AuthContainer from "./Auth/AuthContainer";

const Right = () => {
    return (
            <div className={s.right__block}>
                <AuthContainer/>
            </div>
    );
};

export default Right;
