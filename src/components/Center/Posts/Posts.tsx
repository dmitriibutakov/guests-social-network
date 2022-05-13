import React from 'react';
import s from "../Center.module.css"
import {Post} from "./Post";
import {PostsPropsType} from "./PostsContainer";

const Posts:React.FC<PostsPropsType> = ({postsPage}) => {
    return (
        <div className={s.center__block_posted}>
        {postsPage.posts.map((el) => {
                    return (
                        <div key={el.id} className={s.center__block_posted}>
                            <Post ava={el.ava}
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
                })}
        </div>
    );
};

export default Posts;
