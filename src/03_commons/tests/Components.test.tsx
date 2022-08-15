import React from "react"
import {BrowserRouter} from "react-router-dom";
import App from "../../App";
import ReactDOM from "react-dom/client";
import store from "../../01_BLL/store";
import {render, screen} from "@testing-library/react";
import Status from "../../components/Center/Profile/Status";
import Login from "../../components/Center/Login/Login";
import LoginForm from "../../components/Center/Login/LoginForm";
import {Provider} from "react-redux";
import UniversalInput from "../common_components/UniversalInput/UniversalInput";
import userEvent from "@testing-library/user-event";

test("app rendered", () => {
    const AppWithBrRouter = () => (<BrowserRouter><App store={store}/></BrowserRouter>)
    render(<AppWithBrRouter/>)
})

describe("Init profile status", () => {
    test("value from props should be in the state", () => {
        render(<Status updateStatus={() => {
        }} status={"test status component render"}/>)
        expect(screen.getAllByText("test status component render")).toHaveLength(1)
    })
})
