import React from 'react';
import s from "./Auth.module.css"
import {NavLink} from "react-router-dom"
import {exitImg, loginImg} from "../../../images/dir/icons";


type AuthCompType = {
    isAuth: boolean
}
const Auth: React.FC<AuthCompType> = ({isAuth}) => {
    return (
        <>
            {
                isAuth ? <div className={s.logo}><img src={exitImg} alt="exit"/></div>
                    : <NavLink to={'/login'}>
                        <div className={s.logo}>
                        <img src={loginImg} alt="login"/>
                        </div>
                    </NavLink>
            }
        </>
    );
};

export default Auth;
