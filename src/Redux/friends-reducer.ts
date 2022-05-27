export type FriendsPageType = {
    friends: FriendType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
    friends: [],
    pageSize: 6,
    totalUsersCount: 21,
    currentPage: 3,
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
            return {...state, friends: action.payload.refreshFriends}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        default:
            return state
    }
};
export type FriendsReducerActionType = followACType | unfollowACType | setFriendsACType | setCurrentPageACType | setUsersCountACType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setFriendsACType = ReturnType<typeof setFriendsAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setUsersCountACType = ReturnType<typeof setUsersCountAC>

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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-USERS-COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}
export default FriendsReducer;
