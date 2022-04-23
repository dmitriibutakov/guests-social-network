import React from 'react';
import s from "./Center.module.css"
import NewPost from "./NewPost/NewPost";
import Posted from "./Posted/Posted";
import Stories from "./Stories/Stories";
import Requests from "./Requests/Requests";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Chat from "./Chat/Chat";

const Center = () => {
    return (
        <BrowserRouter>
            <div className={s.center}>
                <Routes>
                    <Route path="/posts/" element={<><div className={s.center__block}><NewPost/></div>
                        <div className={s.center__block}><Posted/></div></>}/>
                    <Route path="/chat/" element={<div className={s.center__block}><Chat/></div>}/>
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
        </BrowserRouter>
    );
};

export default Center;