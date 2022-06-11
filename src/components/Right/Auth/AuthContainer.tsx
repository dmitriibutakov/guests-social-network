import React, {useEffect} from 'react';
import Auth from "./Auth";
import axios from "axios";
import { DataType, setAuthUserData} from "../../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/store";
import {withRouter} from "../../../Redux/withRouter";
import {authCheckData} from "../../../Api/api";

const AuthContainer = (props: AuthPropsType) => {
    const {
        setAuthUserData,
        isAuth
    } = props
    useEffect(() => {
        authCheckData()
            .then(data => {
                if (data.resultCode === 0) {
                    setAuthUserData(data)
                }
            })
    })
    return (
        <Auth isAuth={isAuth}/>
    );
};

type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth,
    }
}
export default connect(mapStateToProps, {setAuthUserData})(withRouter(AuthContainer) );
