import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f7acdcdd-23f7-4502-9b78-fceeb5096223"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    unfollowUser: (userId: number) => instance.delete(`follow/${userId}`),
    followUser: (userId: number) => instance.post(`follow/${userId}`),
}
export const profileAPI = {
    getProfile: (userId: string) => instance.get(`profile/${userId}`),
    getStatus: (userId: string) => instance.get(`/profile/status/${userId}`),
    updateStatus: (status: string) => instance.put(`/profile/status`, {status: status})
}

export const authAPI = {
    authMe: () => instance.get(`auth/me`),
    login: (email: string, password: string, rememberMe: boolean = false) => instance.post(`auth/login`, {
        email,
        password,
        rememberMe
    }),
    logout: () => instance.delete(`auth/login`),
}

