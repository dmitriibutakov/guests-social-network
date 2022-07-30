
export type IsFetchingType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => {return {type: "SET-IS-FETCHING", payload:{isFetching}} as const}
