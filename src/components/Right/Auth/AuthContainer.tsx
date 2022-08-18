import React from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";
import {AppStateType} from "../../../02_BLL/store";
import {withRouter} from "../../../03_commons/hoc/withRouter";
import {logOutTC} from "../../../02_BLL/auth-reducer";

const AuthContainer = (props: AuthPropsType) => {
    return (
        <Auth logout={props.logOutTC} isAuth={props.isAuth}/>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {logOutTC})(withRouter(AuthContainer));

//types
type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    logOutTC: () => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType
