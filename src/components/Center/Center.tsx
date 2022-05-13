import React from 'react';
import s from "./Center.module.css"
import Stories from "./Stories/Stories";
import Requests from "./Requests/Requests";
import {Route, Routes} from "react-router-dom";
import NewPostContainer from "./NewPost/NewPostContainer";
import ChatContainer from "./Chat/ChatContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import PostsContainer from "./Posts/PostsContainer";

const Center = () => {
    return (
        <div className={s.center}>
            <Routes>
                <Route path={"/posts" && "/*"} element={<>
                    <div className={s.center__block}>
                        <NewPostContainer/>
                    </div>
                    <div className={s.center__block}>
                        <PostsContainer/>
                    </div>
                </>}/>
                <Route path={"/chat"}
                       element={<div className={s.center__block}>
                           <ChatContainer/>
                       </div>}/>
                <Route path={"/friends"} element={<div className={s.center__block}>
                    <FriendsContainer/>
                </div>}/>
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
