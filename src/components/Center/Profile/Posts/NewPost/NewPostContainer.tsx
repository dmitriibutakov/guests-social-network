import NewPost from "./NewPost";
import {AppStateType} from "../../../../../Redux/store";
import {ChangeEvent} from "react";

type MapStateToPropsType = {
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (event: ChangeEvent<HTMLInputElement>) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.ProfilePage.newPostText
    }
}

export type NewPostProps = MapStateToPropsType & MapDispatchToPropsType
const NewPostContainer = (props: NewPostProps) => {
    return (
        <NewPost newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    )
}

export default NewPostContainer;
