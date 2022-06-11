import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0ae87bc7-7ce6-4514-a8be-2b6411c35cf6"
    }
})

export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser (id: number) {
        return instance.delete(`follow/${id}`)
    },
    followUser (id: number) {
        return  instance.post(`follow/${id}`)
    },
}

export const authCheckData = () => {
    return instance.get(`auth/me`).then(response=> response.data)
}
