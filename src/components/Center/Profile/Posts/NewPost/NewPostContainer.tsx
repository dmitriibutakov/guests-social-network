import {NewPostReduxForm} from "./NewPost";

type MapDispatchToPropsType = {
    addPost: (value: string) => void
}

export type NewPostProps = MapDispatchToPropsType
const NewPostContainer = (props: NewPostProps) => {
    const addNewPost = (value: { addPostText: string }) => props.addPost(value.addPostText)
    return (
        <NewPostReduxForm onSubmit={addNewPost}/>
    )
}

export default NewPostContainer;
