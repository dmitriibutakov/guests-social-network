import Posts from "./Posts";
import {connect} from "react-redux";
import {PostsPageType} from "../../../Redux/posts-reducer";
import {AppStateType} from "../../../Redux/store";

type MapStateToPropsType = {
    postsPage: PostsPageType
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsPage: state.PostsPage
    }
}
const mapDipatchToProps = () => {
    return {}
}

export type PostsPropsType = MapStateToPropsType

const PostsContainer = connect(mapStateToProps, mapDipatchToProps)(Posts)
export default PostsContainer;
