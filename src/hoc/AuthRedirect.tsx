import React from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../Redux/store";
import {connect} from "react-redux";

type MapStateToRedirectPropsType = {
    isAuth: boolean
}
const mapStateToRedirectProps = (state: AppStateType):MapStateToRedirectPropsType => { return {isAuth: state.Auth.isAuth}}

export const withAuthRedirect = (Component: any) => {
    function RedirectComponent(props: any) {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToRedirectProps)(RedirectComponent)
    return ConnectedRedirectComponent
}



