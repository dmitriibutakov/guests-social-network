import React from 'react';
import s from "./Center.module.css"
import Posted from "./Posted/Posted";
import Stories from "./Stories/Stories";
import Requests from "./Requests/Requests";
import {Route, Routes} from "react-router-dom";
import Chat from "./Chat/Chat";
import {DispatchType, StateType} from "../../Redux/redux-store";
import NewPostContainer from "./NewPost/NewPostContainer";
import ChatContainer from "./Chat/ChatContainer";

type CenterType = {
    state: StateType
    dispatch: DispatchType
}
const Center: React.FC<CenterType> = ({state, dispatch}) => {

    let posts = state.PostsPage.posts.map((el) => {
        return (
            <div className={s.center__block_posted}>
                <Posted ava={el.ava}
                        dots={el.dots}
                        photo1={el.photo1}
                        photo2={el.photo2}
                        photo3={el.photo3}
                        photo4={el.photo4}
                        id={el.id}
                        likes={el.likes}
                        message={el.message}/>
            </div>
        )
    })
    return (
        <div className={s.center}>
            <Routes>
                <Route path="/posts"
                       element={<>
                           <div className={s.center__block}>
                               <NewPostContainer dispatch={dispatch} inputText={state.PostsPage.newPostText}/>
                           </div>
                           <div className={s.center__block}>
                               {posts}
                           </div>
                       </>}/>
                <Route path="/chat"
                       element={<div className={s.center__block}>
                           <ChatContainer dialogsPage={state.DialogsPage} dispatch={dispatch}/>
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
