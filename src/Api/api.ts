import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0ae87bc7-7ce6-4514-a8be-2b6411c35cf6"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    unfollowUser: (userId: number) => instance.delete(`follow/${userId}`),
    followUser: (userId: number) => instance.post(`follow/${userId}`),
}
export const profileAPI = {
    getProfile:(userId: string) => instance.get(`profile/${userId}`),
    getStatus:(userId: string) => instance.get(`/profile/status/${userId}`),
    updateStatus:(status: string) => instance.put(`/profile/status`, {status: status})
}

export const authAPI = {
    authMe:() => instance.get(`auth/me`).then(response => response.data)

}

