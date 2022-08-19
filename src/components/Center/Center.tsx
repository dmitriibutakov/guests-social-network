import React, {Suspense} from 'react';
import s from "./Center.module.scss"
import {Route, Routes} from "react-router-dom";
import Login from './Login/Login';
import Loader from "../../03_commons/common_components/Loader/Loader";
import ProfileAPIContainer from "./Profile/ProfileContainer"
import {useAppSelector} from "../../02_BLL/store";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Settings = React.lazy(() => import("./Settings/Settings"));

const Center = () => {
    const theme = useAppSelector(state => state.app.darkMode)
    const themeBlock = theme ? s.center__block_dark : s.center__block
    return (
        <div className={s.center}>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={`/profile/:userId`} element={<ProfileAPIContainer/>}/>
                    <Route path={`/profile`} element={<ProfileAPIContainer/>}/>
                    <Route path={`/*`} element={<ProfileAPIContainer/>}/>
                    <Route path={"/dialogs"} element={<div className={themeBlock}>
                        <DialogsContainer/>
                    </div>}/>
                    <Route path={`/dialogs/:userName`} element={<div className={themeBlock}>
                        <DialogsContainer/>
                    </div>}/>
                    <Route path={"/login"} element={<div className={themeBlock}>
                        <Login/>
                    </div>}/>
                    <Route path={"/users"} element={<div className={themeBlock}>
                        <UsersContainer/>
                    </div>}/>
                    <Route path={"/settings"} element={<div className={themeBlock}>
                        <Settings/>
                    </div>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default Center;
