import {v1} from "uuid";

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
    newMessageText?: string
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
}

const DialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: v1(),
                name: "me",
                text: action.newMessage,
                time: 22.45,
            }
            return {...state, usersDialogs: [...state.usersDialogs, newMessage]}
        default:
            return state
    }
};

//types
export type DialogsReducerType = AddMessageType
type AddMessageType = ReturnType<typeof addMessage>

//actions
export const addMessage = (newMessage: string) => ({type: "ADD-MESSAGE", newMessage} as const)

export default DialogsReducer;
