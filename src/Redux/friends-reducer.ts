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

type FollowACType = ReturnType<typeof setFollow>
type UnfollowACType = ReturnType<typeof setUnfollow>
type SetFriendsACType = ReturnType<typeof setFriends>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetUsersCountACType = ReturnType<typeof setUsersCount>
type IsFetchingACType = ReturnType<typeof setIsFetching>


export const setFollow = (friendID: string) => {
    return {
        type: "FOLLOW",
        payload: {friendID}
    } as const
}
export const setUnfollow = (friendID: string) => {
    return {
        type: "UNFOLLOW",
        payload: {friendID}
    } as const
}
export const setFriends = (refreshFriends: FriendType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            refreshFriends
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-USERS-COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}
export const setIsFetching = (isFetching: boolean) => {return {type: "SET-IS-FETCHING", payload:{isFetching}} as const}
export default FriendsReducer;
