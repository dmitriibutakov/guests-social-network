export type FriendsPageType = {
    friends: FriendType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    isFetching: false,
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
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
};

export type FriendsReducerActionType = FollowACType | UnfollowACType | SetFriendsACType | SetCurrentPageACType | SetUsersCountACType | IsFetchingACType

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetFriendsACType = ReturnType<typeof setFriendsAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetUsersCountACType = ReturnType<typeof setUsersCountAC>
type IsFetchingACType = ReturnType<typeof setIsFetchingAC>


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
export const setIsFetchingAC = (isFetching: boolean) => {return {type: "SET-IS-FETCHING", payload:{isFetching}} as const}
export default FriendsReducer;
