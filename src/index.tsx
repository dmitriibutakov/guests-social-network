import "./index.css"
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

const RerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
RerenderEntireTree()
// RerenderEntireTree(store.getState())
store.subscribe(() => {
    RerenderEntireTree()
})

reportWebVitals();

