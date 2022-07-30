import React from 'react';
import s from "./Center.module.css"
import {Route, Routes} from "react-router-dom";
import Settings from "./Settings/Settings";
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileAPIContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import Login from './Login/Login';

const Center = () => {
    return (
        <div className={s.center}>
            <Routes>
                <Route path={`/profile/:userId` } element={<ProfileAPIContainer/>}/>
                <Route path={`/profile` } element={<ProfileAPIContainer/>}/>
                <Route path={`/*` } element={<ProfileAPIContainer/>}/>

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

        </div>
    );
};

export default Center;
