import React from 'react';
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import s from "./Login.module.css"
import {connect} from "react-redux";
import {logInTC, logOutTC} from "../../../BLL/auth-reducer";
import {AppStateType} from "../../../BLL/store";
import {Navigate} from "react-router-dom";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.logInTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Navigate to={"/profile"}/>
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

type MapDispatchToPropsType = {
    logInTC: (email: string, password: string, rememberMe: boolean) => void
    logOutTC: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        isAuth: state.Auth.isAuth
    }
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType

export default connect(mapStateToProps, {logInTC, logOutTC})(Login)
