import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "1fa14c67-71e4-4f59-9324-9f56be671b29"}
});


export const usersAPI = {
    getUsers(currentPageUserPage: number, pageSizeUserPage: number) {
        return instance.get(`users?page=${currentPageUserPage}&count= ${pageSizeUserPage}`)
            .then(response => response.data)
    },

    follow: (id: number) => {
        return instance.post(`follow/${id}`)
    },
    unfollow: (id: number) => {
        return instance.delete(`follow/${id}`)
    }
}

export const profileAPI = {
    getProfile: (id: string) => {
        return instance.get(`profile/${id}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },

}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}

