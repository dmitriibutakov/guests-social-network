
export type FriendType = {
    name: string
    id: number
    city: string
}
export type MenuFriendsType = {
    friends: FriendType[]
}

let initialState: MenuFriendsType = {
    friends: [
        {name: 'Noora Hayes', id: Math.random(), city: "New York"},
        {name: 'Edward sarte', id: Math.random(), city: "Paris"},
        {name: 'Emily Endresen', id: Math.random(), city: "Los Angeles"},
    ]
}
const MenuFriendsReducer = (state: MenuFriendsType = initialState, action: MenuFriendsReducerACType): MenuFriendsType => state
export type MenuFriendsReducerACType = any

export default MenuFriendsReducer;
