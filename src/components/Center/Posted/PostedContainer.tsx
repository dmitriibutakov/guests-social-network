import React from 'react';
import StoreContext from '../../../StoreContext';
import s from "../Center.module.css";
import Posted from "./Posted";

const PostedContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => (
                store.getState().PostsPage.posts.map((el) => {
                    return (
                        <div key={el.id} className={s.center__block_posted}>
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
            )
            }</StoreContext.Consumer>
    );
};

export default PostedContainer;
