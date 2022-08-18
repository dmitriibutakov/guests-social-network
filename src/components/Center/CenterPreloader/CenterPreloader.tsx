import React from 'react';
import s from "../Center.module.scss";
import Preloader from "../../../03_commons/common_components/Preloader/Preloader";
import {useAppSelector} from "../../../02_BLL/store";

const CenterPreloader = () => {
    const theme = useAppSelector(state => state.app.darkMode)
    const setTheme = theme ? s.center__block_preloader_dark : s.center__block_preloader
    return (
        <div className={setTheme}><Preloader/></div>
    );
};

export default CenterPreloader;