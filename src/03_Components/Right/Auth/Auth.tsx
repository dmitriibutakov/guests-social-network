import React from 'react';
import s from "./Auth.module.css"
import {NavLink} from "react-router-dom"
import {exitImg, loginImg} from "../../../04_Images/dir/icons";


type AuthCompType = {
    isAuth: boolean
    logout: () => void
}
const Auth: React.FC<AuthCompType> = ({isAuth, logout}) => {
    return (
        <>
            {
                isAuth ? <button onClick={logout} className={s.logo}><img src={exitImg} alt="exit"/></button>
                    : <NavLink to={'/login'}>
                        <button dir={'/login'} className={s.logo} onClick={logout}>
                        <img src={loginImg} alt="login"/>
                        </button>
                    </NavLink>
            }
        </>
    );
};

export default Auth;
