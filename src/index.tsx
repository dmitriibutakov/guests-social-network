import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import store from "./02_BLL/store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(

    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();

