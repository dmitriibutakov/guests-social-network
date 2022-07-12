import React, {useEffect} from "react";
import "./App.css";
import Left from "./Components/Left/Left";
import Center from "./Components/Center/Center";
import Right from "./Components/Right/Right";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, logOutThunkCreator} from "./Redux/auth-reducer";
import {withRouter} from "./Redux/withRouter";
import {compose} from "redux";
import { initializeApp } from "./Redux/app-reducer";
import {AppStateType} from "./Redux/store";
import Preloader from "./Components/UniversalComponents/Preloader/Preloader";

const App = (props: AppPropsType) => {
    useEffect(() => props.initializeApp(), [])
    if (!props.initialized) return <Preloader/>
  return (
    <div className="App">
        <Left/>
        <Center/>
        <Right/>
    </div>
  );
}
const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
type AppPropsType = ReturnType<typeof mapStateToProps> & {initializeApp: () => void}
export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
