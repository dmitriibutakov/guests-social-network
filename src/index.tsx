import "./index.css"
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import StoreContext from "./StoreContext";

const RerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <StoreContext.Provider value={store}>
                    <App/>
                </StoreContext.Provider>
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

