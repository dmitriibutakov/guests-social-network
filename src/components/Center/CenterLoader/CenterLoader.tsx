import React from 'react';
import s from "../Center.module.css";
import Preloader from "../../../03_commons/common_components/Preloader/Preloader";

const CenterLoader = () => {
    return (
        <div className={s.center__block_preloader}><Preloader/></div>
    );
};

export default CenterLoader;