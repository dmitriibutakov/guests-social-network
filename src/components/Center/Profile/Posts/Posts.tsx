import React from "react";
import s from "../../Center.module.css"
import {Post} from "./Post";
import {PostType} from "../../../../Redux/profile-reducer";
type PostsComponentType = {
    posts: Array<PostType>
}
const Posts = (props: PostsComponentType) => {
    return (
        <>
            {props.posts.map((el) => {
                return (
                    <div key={el.id} className={s.center__block_posted}>
                        <Post ava={el.ava}
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
        </>
    );
};

export default Posts;
