import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "29d9c4d5-1083-46c4-8e09-8feb30a63488"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data),
    unfollowUser: (userId: number) => instance.delete(`/follow/${userId}`),
    followUser: (userId: number) => instance.post(`/follow/${userId}`),
}

export const profileAPI = {
    getProfile: (userId: string) => instance.get(`/profile/${userId}`),
    getStatus: (userId: string) => instance.get(`/profile/status/${userId}`),
    updateStatus: (status: string) => instance.put(`/profile/status`, {status: status}),
    fetchPhoto: (photos: any) => {
        const formData = new FormData()
        formData.append("image", photos)
        return instance.put('/profile/photo', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export const authAPI = {
    authMe: () => instance.get(`/auth/me`),
    login: (email: string, password: string, rememberMe: boolean = false) => instance.post(`/auth/login`, {
        email,
        password,
        rememberMe
    }),
    logout: () => instance.delete(`/auth/login`),
}

