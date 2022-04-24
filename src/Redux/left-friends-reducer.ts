import {ActionType, LeftFriendsType} from "./redux-store";
import {v1} from "uuid";
import friend1 from "../cons/friends/friend1.png"
import friend2 from "../cons/friends/friend2.png"
import friend3 from "../cons/friends/friend3.png"


let initialState = {
    friends: [
        {avatar: friend1, name: 'Noora Hayes', id: v1(), city: "New York"},
        {avatar: friend2, name: 'Edward sarte', id: v1(),  city: "Paris"},
        {avatar: friend3, name: 'Emily Endresen', id: v1(),  city: "Los Angeles"},
    ]
}
const LeftFriendsReducer = (state: LeftFriendsType = initialState, action:ActionType) => state

export default LeftFriendsReducer;