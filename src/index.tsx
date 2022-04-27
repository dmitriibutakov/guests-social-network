import "./index.css"
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import store, {StateType} from "./Redux/redux-store";

const RerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
RerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    RerenderEntireTree(state)
})

reportWebVitals();

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
//
// root.render(
//     <BrowserRouter>
//         <React.StrictMode>
//             <App state={state} dispatch={store.dispatch.bind(store)}/>
//         </React.StrictMode>
//     </BrowserRouter>
// );
