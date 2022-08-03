import React, {useEffect} from "react";
import "./App.css";
import Left from "./03_Components/Left/Left";
import Center from "./03_Components/Center/Center";
import Right from "./03_Components/Right/Right";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./03_Components/UniversalComponents/Preloader/Preloader";
import { AppStateType } from "./01_BLL/store";
import { withRouter } from "./01_BLL/withRouter";
import { initializeAppTC } from "./01_BLL/app-reducer";

const App = (props: AppPropsType) => {
    useEffect(() => {
        async function fetchData() {
            const response = await props.initializeAppTC();
        }
        fetchData();
    }, [])
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
type AppPropsType = ReturnType<typeof mapStateToProps> & {initializeAppTC: () => void}
export default compose(withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App)
