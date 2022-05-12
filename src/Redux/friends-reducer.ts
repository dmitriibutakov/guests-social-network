import {v1} from "uuid";
import friend4 from "../cons/friends/friend4.png";
import friend5 from "../cons/friends/friend5.png";
import friend6 from "../cons/friends/friend6.png";
import friend1 from "../cons/friends/friend1.png";
import friend7 from "../cons/friends/friend7.png";
import friend8 from "../cons/friends/friend8.png";
import friend9 from "../cons/friends/friend9.png";
import friend10 from "../cons/friends/friend10.png";
import friend2 from "../cons/friends/friend1.png";
import {FriendsPageType, FriendsReducerActionType, FriendType} from "./redux-store";

let initialState = {
    friends: []
}
const FriendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerActionType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                friends: [...state.friends.map(el => el.id === action.payload.friendID ? {...el, followed: true} : el)]
            }
        case "UNFOLLOW":
            return {
                ...state,
                friends: [...state.friends.map(el => el.id === action.payload.friendID ? {...el, followed: false} : el)]
            }
        case "SET-USERS":
            return {...state, friends: [...action.payload.refreshFriends]}
        default:
            return state
    }
};

export const followAC = (friendID: string) => {
    return {
        type: "FOLLOW",
        payload: {friendID}
    } as const
}

export const unfollowAC = (friendID: string) => {
    return {
        type: "UNFOLLOW",
        payload: {friendID}
    } as const
}

export const setFriendsAC = (refreshFriends: FriendType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            refreshFriends
        }
    } as const
}
export default FriendsReducer;
