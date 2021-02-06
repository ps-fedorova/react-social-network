import { rerenderEntreeTree } from "../render"

const state = {
  dialogs: {
    ARR__NAME: ["Лиза", "Лена", "Света", "Даша", "Саша"],
    ARR__MESSAGES: ["Полковнику никто", "Не пишет", "Полковника никто", "Не ждёт"],
  },
  profile: {
    ARR__POSTS: [
      {
        message: "Большие города"
      },
      {
        message: "Пустые поезда"
      },
      {
        message: "Ни берега, ни дна"
      },
      {
        message: "Все начинать сначала"
      },
      // {
      //   message: "Холодная война"
      // },
      // {
      //   message: "И время как вода"
      // },
      // {
      //   message: "Он не сошел с ума"
      // },
      // {
      //   message: "Ты ничего не знала"
      // },
    ],
  },
  navBar: {
    ARR__NAVBAR: [
      {
        key: "Profile",
        path: "/profile",
      },
      {
        key: "Messages",
        path: "/dialogs",
      },
      {
        key: "Friends",
        path: "/friends",
      },
      {
        key: "Settings",
        path: "/settings",
      },
    ]
  }
}

export default state;

export const addPost = (postMessage) => {
  const newPost = { message: postMessage }
  state.profile.ARR__POSTS.push(newPost);
  rerenderEntreeTree(state);
}
