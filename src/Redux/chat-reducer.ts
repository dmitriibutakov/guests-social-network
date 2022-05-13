import {ChangeEvent} from "react";
import {v1} from "uuid";
import friend4 from "../cons/friends/friend4.png"
import friend5 from "../cons/friends/friend5.png"
import friend6 from "../cons/friends/friend6.png"
import friend1 from "../cons/friends/friend1.png"
import friend7 from "../cons/friends/friend7.png"
import me from "../cons/ava.png";

export type UserType = {
    name: string
    id: string
    ava: string
}
export type UserDialogType = {
    id: string
    name: string
    text: string
    time: number
    ava: string
}
export type DialogsPageType = {
    users: Array<UserType>
    usersDialogs: Array<UserDialogType>
    newMessageText: string
}

let initialState: DialogsPageType = {
    users: [
        {name: 'Mike', id: v1(), ava: friend4},
        {name: 'Lisa', id: v1(), ava: friend5},
        {name: 'Emily Martin', id: v1(), ava: friend6},
        {name: 'Lucky', id: v1(), ava: friend1},
        {name: 'Jacky Swarbe', id: v1(), ava: friend7},
    ],
    usersDialogs: [
        {id: v1(), name: 'Lisa', text: 'Hello', time: 22.14, ava: friend5},
        {id: v1(), name: 'Me', text: 'How are you?', time: 22.24, ava: me},
        {id: v1(), name: 'Lisa', text: 'I love you', time: 22.34, ava: friend5},
        {id: v1(), name: 'Me', text: 'Love you 2', time: 22.44, ava: me}
    ],
    newMessageText: " ",
}

const ChatReducer = (state: DialogsPageType = initialState, action: ChatReducerACType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: v1(),
                name: "me",
                text: state.newMessageText,
                time: 22.45,
                ava: me
            }
            return {...state, usersDialogs: [...state.usersDialogs, newMessage], newMessageText: ""}
        case "UPDATE-NEW-MESSAGE":
            return {...state, newMessageText: action.newText}
        default:
            return state
    }
};

export type ChatReducerACType = addMessageACType | updateNewMessageACType
type addMessageACType = ReturnType<typeof addMessageActionCreator>
type updateNewMessageACType = ReturnType<typeof updateNewMessageActionCreator>

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE", newText: ""} as const)
export const updateNewMessageActionCreator = (event: ChangeEvent<HTMLInputElement>) => {
    return (
        {type: "UPDATE-NEW-MESSAGE", newText: event.currentTarget.value} as const
    )
}

export default ChatReducer;
