import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/posts-reducer";
import NewPost from "./NewPost";
import StoreContext from '../../../StoreContext';

const NewPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    let action = addPostActionCreator()
                    store.dispatch(action)
                }
                const updateNewPostText = (event: ChangeEvent<HTMLInputElement>) => {
                    let action = updateNewPostTextActionCreator(event)
                    store.dispatch(action)
                }
                return (

                    <NewPost updateNewPostText={updateNewPostText}
                             addPost={addPost}
                             inputText={store.getState().PostsPage.newPostText}/>)
            }}
        </StoreContext.Consumer>
    )
}


            export default NewPostContainer;
