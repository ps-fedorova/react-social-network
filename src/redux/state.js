import { rerenderEntreeTree } from "../render"

const state = {
  dialogs: {
    ARR__NAME: ["Лиза", "Лена", "Света", "Даша", "Саша"],
    ARR__MESSAGES: ["Полковнику никто", "Не пишет", "Полковника никто", "Не ждёт"],
    NEW_MESSAGE_TEXT: ""
  },
  profile: {
    ARR_POSTS: [
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
    NEW_POST_TEXT: ""
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

/////////////Post/////////////
export const updateNewPostText = (newText) => {
  state.profile.NEW_POST_TEXT = newText;
  rerenderEntreeTree(state);
}

export const addPost = () => {
  const newPost = {
    message: state.profile.NEW_POST_TEXT
  }

  state.profile.ARR_POSTS.push(newPost);
  updateNewPostText('');
  rerenderEntreeTree(state);
}
/////////////Message/////////////
export const updateNewPostMessage = (newText) => {
  state.dialogs.NEW_MESSAGE_TEXT = newText;
  rerenderEntreeTree(state);
}

export const addMessage = () => {
  const newMessage = state.dialogs.NEW_MESSAGE_TEXT;

  state.dialogs.ARR__MESSAGES.push(newMessage);
  updateNewPostText('');
  rerenderEntreeTree(state);
}
