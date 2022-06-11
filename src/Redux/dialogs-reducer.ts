import {ChangeEvent} from "react";
import {v1} from "uuid";
import friend4 from "../cons/friends/friend4.png"
import friend5 from "../cons/friends/friend5.png"
import friend6 from "../cons/friends/friend6.png"
import friend1 from "../cons/friends/friend1.png"
import friend7 from "../cons/friends/friend7.png"
import me from "../cons/ava.png";

export type UserInDialType = {
    name: string
    id: string
}
export type UserDialogType = {
    id: string
    name: string
    text: string
    time: number
}
export type DialogsPageType = {
    users: Array<UserInDialType>
    usersDialogs: Array<UserDialogType>
    newMessageText: string
}

let initialState: DialogsPageType = {
    users: [
        {name: 'Mike', id: v1()},
        {name: 'Lisa', id: v1()},
        {name: 'Emily Martin', id: v1()},
        {name: 'Lucky', id: v1()},
        {name: 'Jacky Swarbe', id: v1()},
    ],
    usersDialogs: [
        {id: v1(), name: 'Lisa', text: 'Hello', time: 22.14},
        {id: v1(), name: 'Me', text: 'How are you?', time: 22.24},
        {id: v1(), name: 'Lisa', text: 'I love you', time: 22.34},
        {id: v1(), name: 'Me', text: 'Love you 2', time: 22.44}
    ],
    newMessageText: " ",
}

const DialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: v1(),
                name: "me",
                text: state.newMessageText,
                time: 22.45,
            }
            return {...state, usersDialogs: [...state.usersDialogs, newMessage], newMessageText: ""}
        case "UPDATE-NEW-MESSAGE":
            return {...state, newMessageText: action.newText}
        default:
            return state
    }
};

export type DialogsReducerType = AddMessageType | UpdateNewMessageType
type AddMessageType = ReturnType<typeof addMessage>
type UpdateNewMessageType = ReturnType<typeof updateNewMessage>

export const addMessage = () => ({type: "ADD-MESSAGE", newText: ""} as const)
export const updateNewMessage = (event: ChangeEvent<HTMLInputElement>) => {
    return (
        {type: "UPDATE-NEW-MESSAGE", newText: event.currentTarget.value} as const
    )
}

export default DialogsReducer;
