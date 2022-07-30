import Posts from "./Posts";
import {PostType} from "../../../../BLL/profile-reducer";

type MapStateToPropsType = {
    posts: Array<PostType>
}
export type PostsPropsType = MapStateToPropsType

const PostsContainer = (props: PostsPropsType) => {
    return (
        <Posts posts={props.posts}/>
    )
}
export default PostsContainer;
