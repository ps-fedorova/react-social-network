import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "a43857f4-a0f1-4887-96bc-da4d465484bc" },
});


export const authAPI = {
  getAuth() {
    return (
      axiosInstance.get(`auth/me`)
    ).then(res => res.data)
  }
}

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return (
      axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`)
    ).then(res => res.data) // нам нужны только данные!
  },
  postFollow(id) {
    return (
      axiosInstance.post(`follow/${id}`)
    ).then(res => res.data)
  },
  deleteFollow(id) {
    return (
      axiosInstance.delete(`follow/${id}`)
    ).then(res => res.data)
  }
}

export const profileAPI = {
  getProfile(id) {
    return (
      axiosInstance.get(`profile/${id}`)
    ).then(res => res.data)
  },
  getStatus(id) {
    return (
      axiosInstance.get(`/profile/status/${id}`)
    ).then(res => res.data)
  },
  updateStatus(status) {
    return (
      axiosInstance.put(`/profile/status`, { status: status })
        .then(res => {
            if (res.data.resultCode === 0) {
              return res.data
            }
          }
        ))
  },
}
