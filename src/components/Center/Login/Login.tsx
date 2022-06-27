import React from 'react';
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import s from "./Login.module.css"

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={s.login}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
