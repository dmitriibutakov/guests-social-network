import React, {useEffect} from 'react';
import Auth from "./Auth";
import axios from "axios";
import { DataType, setAuthUserData} from "../../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/store";
import {withRouter} from "../../../Redux/withRouter";

const AuthContainer = (props: AuthPropsType) => {
    const {
        setAuthUserData,
        login, isAuth
    } = props
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    console.log(response.data)
                    setAuthUserData(response.data.data)
                }
            })
    })
    return (
        <Auth login={login} isAuth={isAuth}/>
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
