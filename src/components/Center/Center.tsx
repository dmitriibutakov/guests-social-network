import React from 'react';
import s from "./Center.module.css"
import Stories from "./Stories/Stories";
import Requests from "./Requests/Requests";
import {Route, Routes} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import Settings from "./Settings/Settings";
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileAPIContainer from "./Profile/ProfileContainer";

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
                    LOGIN
                </div>}/>
                <Route path={"/friends"} element={<div className={s.center__block}>
                    <FriendsContainer/>
                </div>}/>
                <Route path={"/settings"} element={<div className={s.center__block}><Settings/></div>}/>
            </Routes>
            <div className={s.center__footer}>
                <div className={s.center__block_stories}>
                    <Stories/>
                </div>
                <div className={s.center__block_requests}>
                    <Requests/>
                </div>
            </div>
        </div>
    );
};

export default Center;
