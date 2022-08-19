import {v1} from "uuid";
import {log} from "util";
import {day, hours, minutes, month, year} from "../03_commons/utils/helpers";

export type UserInDialType = {
    name: string
    id: string
}
export type UserDialogType = {
    id: string
    name: string
    text: string
    time: number | string
    to?: string
}
export type DialogsPageType = {
    users: Array<UserInDialType>
    usersDialogs: Array<UserDialogType>
    activeDialog: Array<UserDialogType>
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
        {id: v1(), name: 'Lucky', text: 'Heeey', time: '18:24 5.2.2022'},
        {id: v1(), name: 'Jacky Swarbe', text: "I wanna meet you", time: '15:24 5.1.2022'},
        {id: v1(), name: 'Lisa', text: `Good evening, I'm Lisa`, time: '18:42 5.7.2021'},
        {id: v1(), name: 'Mike', text: `Yo, man! I'm Mike`, time: '18:24 5.7.2021'},
        {id: v1(), name: 'Lucky', text: 'Hello', time: '11:21 9.10.2021'},
        {id: v1(), name: 'Me', to: "Mike", text: 'How are you?', time: '18:02 1.2.2021'},
        {id: v1(), name: 'Me', to: "Lucky", text: 'How are you?', time: '13:25 2.9.2021'},
        {id: v1(), name: 'Me', to: "Jacky Swarbe", text: 'Gone', time: '06:12 5.7.2021'},
        {id: v1(), name: 'Lucky', text: 'I am nice.', time: '18:24 5.7.2021'},
        {id: v1(), name: 'Me', to: "Emily Martin", text: 'Have a good day', time: '18:24 7.4.2021'},
        {id: v1(), name: 'Emily Martin', text: 'Good morning, my friend', time:'9:47 22.7.2021'},
        {id: v1(), name: 'Me', to: "Lisa", text: 'Have a good day', time: '19:24 5.8.2021'},

    ],
    activeDialog: []
}

const DialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: v1(),
                name: "me",
                text: action.newMessage,
                to: action.to,
                time: `${hours}:${minutes} ${day}.${month}.${year}`,
            }
            return {...state, activeDialog: [...state.activeDialog, newMessage]}
        case "SET-DIALOG":
            return {...state, activeDialog: state.usersDialogs.filter(el => el.name === action.name || el.to === action.name)}
        default:
            return state
    }
};

//types
export type DialogsReducerType = ReturnType<typeof addMessage> | ReturnType<typeof setDialog>

//actions
export const addMessage = (newMessage: string, to: string) => ({type: "ADD-MESSAGE", newMessage, to} as const)
export const setDialog = (name: string) => ({type: "SET-DIALOG", name} as const)

export default DialogsReducer;
