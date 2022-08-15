import React, {useEffect} from "react";
import "./App.css";
import Left from "./components/Left/Left";
import Center from "./components/Center/Center";
import Right from "./components/Right/Right";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./03_commons/common_components/Preloader/Preloader";
import { AppStateType } from "./02_BLL/store";
import { withRouter } from "./03_commons/hoc/withRouter";
import { initializeAppTC } from "./02_BLL/app-reducer";
import InitPreloader from "./03_commons/common_components/InitPreloader/InitPreloader";

const App = (props: AppPropsType) => {
    useEffect(() => {
        async function fetchData() {
            await props.initializeAppTC();
        }
        fetchData();
    }, [])
    if (!props.initialized) {
        return <div className={"preloader"}><InitPreloader/></div>
    }
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
type AppPropsType = ReturnType<typeof mapStateToProps> & {initializeAppTC: () => void}
export default  compose(withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App)
