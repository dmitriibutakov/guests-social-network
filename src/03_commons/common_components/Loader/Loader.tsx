import React from 'react';
import privateClass from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={privateClass.loader__block}>
            <div className={privateClass.loader}>
                <div className={privateClass.loader__element}></div>
            </div>
        </div>
    );
};

export default Loader;
