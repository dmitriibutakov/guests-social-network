
import {ChangeEvent} from "react";
import {ActionType, DialogsPageType} from "./redux-store";
import {v1} from "uuid";
import mike from "../cons/center/story2.png";
import lisa from "../cons/center/story3.png";
import emily from "../cons/center/story1.png";
import me from "../cons/center/story4.png";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

let initialState = {
    users: [
        {name: 'Mike', id: v1(), ava: mike},
        {name: 'Lisa', id: v1(), ava: lisa},
        {name: 'Emily Martin', id: v1(), ava: emily},
    ],
    usersDialogs: [
        {name: 'Lisa', text: 'Hello', time: 22.14, ava: lisa},
        {name: 'Me', text: 'How are you?', time: 22.24, ava: me},
        {name: 'Lisa', text: 'I love you', time: 22.34, ava: lisa},
        {name: 'Me', text: 'Love you 2', time: 22.44, ava: me}
    ],
    newMessageText: " ",
}
const DialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                name: "me",
                text: state.newMessageText,
                time: 22.45
            }
            state.usersDialogs.push(newMessage)
            state.newMessageText = " "
            return state
        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE, newText: " "})
export const updateNewMessageActionCreator = (event: ChangeEvent<HTMLInputElement>) => {
    // debugger
    return (
        {type: UPDATE_NEW_MESSAGE, newText: event.currentTarget.value}
    )
}
export default DialogsReducer;