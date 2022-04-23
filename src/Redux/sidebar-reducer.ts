import {ActionType, NavSidebarType} from "./redux-store";

let initialState = {
    friends: [
        {name: 'Alexey', id: 1},
        {name: 'Evgenia', id: 2},
        {name: 'Maksim', id: 3},
        {name: 'Tatiana', id: 4},
        {name: 'Olga', id: 5}
    ]
}
const SidebarReducer = (state: NavSidebarType = initialState, action:ActionType) => state

export default SidebarReducer;