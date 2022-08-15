import React, {Suspense} from 'react';
import s from "./Center.module.css"
import {Route, Routes} from "react-router-dom";
import Login from './Login/Login';
import Loader from "../../03_commons/common_components/Loader/Loader";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const ProfileAPIContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Settings = React.lazy(() => import("./Settings/Settings"));

const Center = () => {
    return (
        <div className={s.center}>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={`/profile/:userId`} element={<ProfileAPIContainer/>}/>
                    <Route path={`/profile`} element={<ProfileAPIContainer/>}/>
                    <Route path={`/*`} element={<ProfileAPIContainer/>}/>
                    <Route path={"/dialogs"} element={<div className={s.center__block}>
                        <DialogsContainer/>
                    </div>}/>
                    <Route path={"/login"} element={<div className={s.center__block}>
                        <Login/>
                    </div>}/>
                    <Route path={"/users"} element={<div className={s.center__block}>
                        <UsersContainer/>
                    </div>}/>
                    <Route path={"/settings"} element={<div className={s.center__block}>
                        <Settings/>
                    </div>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default Center;
