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
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
    }
}

