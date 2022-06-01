import React from 'react';
import preloader from '../../../cons/preloader.gif'
import s from './Preloader.module.css'
const Preloader = () => {
    return (
        <div className={s.preloader}><img src={preloader} alt="preloader"/></div>
    );
};

export default Preloader;
