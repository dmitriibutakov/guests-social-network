import React from "react";
import s from "../../Center.module.css"
import {Post} from "./Post";
import {PostType} from "../../../../BLL/profile-reducer";
type PostsComponentType = {
    posts: Array<PostType>
}
const Posts = (props: PostsComponentType) => {
    return (
        <>
            {props.posts.map((el) => {
                return (
                    <div key={el.id} className={s.center__block_posted}>
                        <Post
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
