import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../02_BLL/store";
import {connect} from "react-redux";

type MapStateToRedirectPropsType = {
    isAuth: boolean
}
const mapStateToRedirectProps = (state: AppStateType): MapStateToRedirectPropsType => {
    return {isAuth: state.auth.isAuth}
}

export function withAuthRedirect<P>(Component: ComponentType<P>) {
    function RedirectComponent(props: MapStateToRedirectPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as P}/>
    }
    return connect(mapStateToRedirectProps)(RedirectComponent)
}



