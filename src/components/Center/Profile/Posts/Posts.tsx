import React from "react";
import s from "../../Center.module.scss"
import {Post} from "./Post";
import {PostType} from "../../../../02_BLL/profile-reducer";
import {useAppSelector} from "../../../../02_BLL/store";

type PostsComponentType = {
    posts: Array<PostType>
}
const Posts = React.memo((props: PostsComponentType) => {
    const theme = useAppSelector(state => state.app.darkMode)
    return (
        <>
            {props.posts.map((el) => {
                return (
                    <div key={el.id} className={theme ? s.post__dark : s.post}>
                        <Post avatar={el.avatar}
                            id={el.id}
                            likes={el.likes}
                            message={el.message}/>
                    </div>
                )
            })}
        </>
    );
});

export default Posts;
