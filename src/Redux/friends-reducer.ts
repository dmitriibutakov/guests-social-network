
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
