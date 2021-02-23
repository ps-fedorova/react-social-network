import * as axios from "axios";

axios.defaults.withCredentials = true

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "a43857f4-a0f1-4887-96bc-da4d465484bc" },
});

export const getUsers = (pageSize, currentPage) => {
  return (
    axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`)
  ).then(res => res.data)
}
