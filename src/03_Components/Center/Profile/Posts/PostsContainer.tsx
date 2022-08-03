import React from "react";
import Posts from "./Posts";
import {PostType} from "../../../../01_BLL/profile-reducer";


export type PostsPropsType = {
    posts: Array<PostType>
}

const PostsContainer = React.memo((props: PostsPropsType) => {
    return (
        <Posts posts={props.posts}/>
    )
})
export default PostsContainer;
