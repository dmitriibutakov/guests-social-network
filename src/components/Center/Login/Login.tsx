import React from 'react';
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import s from "./Login.module.scss"
import {connect} from "react-redux";
import {logInTC, logOutTC} from "../../../02_BLL/auth-reducer";
import {AppStateType} from "../../../02_BLL/store";
import {Navigate} from "react-router-dom";
import Loader from "../../../03_commons/common_components/Loader/Loader";
import ErrorResponse from "../../../03_commons/common_components/ErrorResponse/ErrorResponse";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
const Login: React.FC<LoginPropsType> = ({
                                             logInTC, logOutTC,
                                             errorOfResponse, isFetching,
                                             isAuth, captchaUrl
                                         }) => {
    const onSubmit = (formData: FormDataType) => {
        logInTC(formData.captcha, formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) return <Navigate to={"/profile"}/>
    if (isFetching) return <Loader/>
    return (
        <div className={s.login}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
            <ErrorResponse errorOfResponse={errorOfResponse}/>
        </div>
    );
};

export type LoginReduxFormPropsType = {
    captchaUrl: string
}
const LoginReduxForm = reduxForm<FormDataType, LoginReduxFormPropsType>( {
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.app.isFetching,
        errorOfResponse: state.app.errorOfResponse,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {logInTC, logOutTC})(Login)

//types
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    logInTC: (captcha:string,email: string, password: string, rememberMe: boolean) => void
    logOutTC: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    isFetching: boolean
    errorOfResponse: string | null
    captchaUrl: string
}
