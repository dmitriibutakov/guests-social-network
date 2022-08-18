import React from 'react';
import s from "./Auth.module.scss"
import {NavLink} from "react-router-dom"
import { images } from '../../../03_commons/images/dir/icons';
import {useAppSelector} from "../../../02_BLL/store";


type AuthCompType = {
    isAuth: boolean
    logout: () => void
}
const Auth: React.FC<AuthCompType> = ({isAuth, logout}) => {
    const theme = useAppSelector(state => state.app.darkMode)
    const logoTheme = theme ? s.logo__dark : s.logo
    return (
        <>
            {
                isAuth ? <button onClick={logout} className={logoTheme}><img src={images.exitImg} alt="exit"/></button>
                    : <NavLink to={'/login'}>
                        <button dir={'/login'} className={logoTheme} onClick={logout}>
                        <img src={images.loginImg} alt="login"/>
                        </button>
                    </NavLink>
            }
        </>
    );
};

export default Auth;
