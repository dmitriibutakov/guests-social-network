import {NewPostReduxForm} from "./NewPost";
import {useAppDispatch} from "../../../../../02_BLL/store";
import { reset } from "redux-form";

const NewPostContainer = (props: NewPostProps) => {
    const dispatch = useAppDispatch()
    const addNewPost = (value: { addPostText: string}) => {
        props.addPost(value.addPostText)
        dispatch(reset("profileAddPost"))
    }
    return (
        <NewPostReduxForm onSubmit={addNewPost}/>
    )
}

//types
type MapDispatchToPropsType = { addPost: (value: string) => void }
export type NewPostProps = MapDispatchToPropsType

export default NewPostContainer;
