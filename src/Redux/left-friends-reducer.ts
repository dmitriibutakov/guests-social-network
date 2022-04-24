import {ActionType, NavSidebarType} from "./redux-store";
import ava1 from "../cons/left/ava1.png";
import {v1} from "uuid";
import ava2 from "../cons/left/ava2.png";
import ava3 from "../cons/left/ava3.png";

let initialState = {
    users: [
        {avatar: ava1, name: 'Noora Hayes', id: v1(), city: "New York"},
        {avatar: ava2, name: 'Edward sarte', id: v1(),  city: "Paris"},
        {avatar: ava3, name: 'Emily Endresen', id: v1(),  city: "Los Angeles"},
    ]
}
const SidebarReducer = (state: NavSidebarType = initialState, action:ActionType) => state

export default SidebarReducer;