import React from 'react';
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import s from "./Login.module.css"
import {connect} from "react-redux";
import {logInThunkCreator, logOutThunkCreator} from "../../../Redux/auth-reducer";
import {AppStateType} from "../../../Redux/store";
import {Navigate} from "react-router-dom";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.logInThunkCreator(formData.email, formData.password, formData.rememberMe)
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
    logInThunkCreator: (email: string, password: string, rememberMe: boolean) => void
    logOutThunkCreator: () => void
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

export default connect(mapStateToProps, {logInThunkCreator, logOutThunkCreator})(Login)
