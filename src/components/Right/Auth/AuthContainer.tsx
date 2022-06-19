import React, {useEffect} from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/store";
import {withRouter} from "../../../Redux/withRouter";
import {setAuthUserData} from "../../../Redux/auth-reducer";

const AuthContainer = (props: AuthPropsType) => {
    const {setAuthUserData, isAuth} = props
    useEffect(() => setAuthUserData(), [])
    return (
        <Auth isAuth={isAuth}/>
    );
};

type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: () => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth,
    }
}
export default connect(mapStateToProps, {setAuthUserData})(withRouter(AuthContainer));
