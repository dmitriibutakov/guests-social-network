import React, {useEffect} from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/store";
import {withRouter} from "../../../Redux/withRouter";
import {getAuthUserDataThunkCreator, logOutThunkCreator} from "../../../Redux/auth-reducer";

const AuthContainer = (props: AuthPropsType) => {
    return (
        <Auth logout={props.logOutThunkCreator} isAuth={props.isAuth}/>
    );
};

type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    logOutThunkCreator: () => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth,
    }
}
export default connect(mapStateToProps, {logOutThunkCreator})(withRouter(AuthContainer));
