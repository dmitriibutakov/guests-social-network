import {v1} from "uuid";
import friend1 from "../cons/friends/friend1.png"
import friend2 from "../cons/friends/friend2.png"
import friend3 from "../cons/friends/friend3.png"

export type UserType = {
    avatar: string
    name: string
    id: string
    city: string
}
export type MenuUsersType = {
    users: UserType[]
}

let initialState: MenuUsersType = {
    users: [
        {avatar: friend1, name: 'Noora Hayes', id: v1(), city: "New York"},
        {avatar: friend2, name: 'Edward sarte', id: v1(), city: "Paris"},
        {avatar: friend3, name: 'Emily Endresen', id: v1(), city: "Los Angeles"},
    ]
}
const MenuUsersReducer = (state: MenuUsersType = initialState, action: MenuUsersReducerACType): MenuUsersType => state
export type MenuUsersReducerACType = any

export default MenuUsersReducer;
