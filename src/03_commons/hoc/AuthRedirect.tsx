import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../01_BLL/store";
import {connect} from "react-redux";

type MapStateToRedirectPropsType = {
    isAuth: boolean
}
const mapStateToRedirectProps = (state: AppStateType): MapStateToRedirectPropsType => {
    return {isAuth: state.Auth.isAuth}
}

export const withAuthRedirect = (Component: ComponentType) => {
    function RedirectComponent(props: MapStateToRedirectPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps}/>
    }

    return connect(mapStateToRedirectProps)(RedirectComponent)
}



