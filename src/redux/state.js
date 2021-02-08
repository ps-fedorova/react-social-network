export const store = {
  _state: {
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
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
  },
  updateNewPostText(newText) {
    this._state.profile.NEW_POST_TEXT = newText;
    this._callSubscriber(this._state);
  },
  addPost() {
    const newPost = {
      message: this._state.profile.NEW_POST_TEXT
    }

    this._state.profile.ARR_POSTS.push(newPost);
    this.updateNewPostText('');
    this._callSubscriber(this._state);
  },
  updateNewPostMessage(newText) {
    this._state.dialogs.NEW_MESSAGE_TEXT = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    const newMessage = this._state.dialogs.NEW_MESSAGE_TEXT;

    this._state.dialogs.ARR__MESSAGES.push(newMessage);
    this.updateNewPostMessage('');
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

window.store = store;
