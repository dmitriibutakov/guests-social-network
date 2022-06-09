import React from 'react';
import s from "./Auth.module.css"
import {NavLink} from "react-router-dom";

type AuthCompType = {
    login: string
    isAuth: boolean
}
const Auth:React.FC<AuthCompType> = ({login, isAuth}) => {
    return (
        <>
        {isAuth ? <span>{login}</span> : <NavLink className={s.login} to={'/login'}>Login</NavLink>}
        </>
    );
};

export default Auth;
