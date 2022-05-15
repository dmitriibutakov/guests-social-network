import {v1} from "uuid";
import friend4 from "../cons/friends/friend4.png";
import friend5 from "../cons/friends/friend5.png";
import friend6 from "../cons/friends/friend6.png";
import friend1 from "../cons/friends/friend1.png";
import friend7 from "../cons/friends/friend7.png";
import friend8 from "../cons/friends/friend8.png";
import friend10 from "../cons/friends/friend10.png";
import friend9 from "../cons/friends/friend9.png";
import friend2 from "../cons/friends/friend1.png";

export type FriendsPageType = {
    friends: FriendType[]
}
export type FriendType = {
    name: string,
    followed: boolean,
    id: string,
    ava: string,
    status: string,
    location: { city: string, country: string }
}
const friendsState = [
    {
        name: 'Mike',
        followed: false,
        id: v1(),
        ava: friend4,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Lisa',
        followed: true,
        id: v1(),
        ava: friend5,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Emily Martin',
        followed: true,
        id: v1(),
        ava: friend6,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Lucky',
        followed: false,
        id: v1(),
        ava: friend1,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Jacky Swarbe',
        followed: true,
        id: v1(),
        ava: friend7,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Swally Murren',
        followed: false,
        id: v1(),
        ava: friend8,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Muller Dwab',
        followed: true,
        id: v1(),
        ava: friend10,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Martin Haris',
        followed: false,
        id: v1(),
        ava: friend9,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    },
    {
        name: 'Slouy Byter',
        followed: true,
        id: v1(),
        ava: friend2,
        status: "No is possible",
        location: {city: "Roma", country: "Italy"}
    }]
let initialState: FriendsPageType = {
    friends: []
}
const FriendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerActionType): FriendsPageType => {
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
export type FriendsReducerActionType = followACType | unfollowACType | setFriendsACType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setFriendsACType = ReturnType<typeof setFriendsAC>

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
