import React from 'react';
import preloader from '../../images/preloader.svg'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.preloader}><img src={preloader} alt="preloader"/></div>
    );
};

export default Preloader;
