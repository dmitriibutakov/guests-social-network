import React from 'react';
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import s from "./Login.module.css"
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
}
const Login:React.FC<LoginPropsType> = ({logInTC, logOutTC, errorOfResponse, isFetching, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        logInTC(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) return <Navigate to={"/profile"}/>
    if (isFetching) return <Loader/>
    return (
        <div className={s.login}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <ErrorResponse errorOfResponse={errorOfResponse}/>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.Auth.isAuth,
        isFetching: state.Auth.isFetching,
        errorOfResponse: state.app.errorOfResponse
    }
}
export default connect(mapStateToProps, {logInTC, logOutTC})(Login)

//types
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    logInTC: (email: string, password: string, rememberMe: boolean) => void
    logOutTC: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    isFetching: boolean
    errorOfResponse: string | null
}
