import {NewPostReduxForm} from "./NewPost";

const NewPostContainer = (props: NewPostProps) => {
    const addNewPost = (value: { addPostText: string}) => props.addPost(value.addPostText)
    return (
        <NewPostReduxForm onSubmit={addNewPost}/>
    )
}

//types
type MapDispatchToPropsType = { addPost: (value: string) => void }
export type NewPostProps = MapDispatchToPropsType

export default NewPostContainer;
