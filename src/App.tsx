import React, {useEffect} from "react";
import "./App.css";
import Left from "./Components/Left/Left";
import Center from "./Components/Center/Center";
import Right from "./Components/Right/Right";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./Components/UniversalComponents/Preloader/Preloader";
import { AppStateType } from "./BLL/store";
import { withRouter } from "./BLL/withRouter";
import { initializeAppTC } from "./BLL/app-reducer";

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
