const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-POST-MESSAGE";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  _callSubscriber() {
  },

  getState() {
    return this._state
  }, // получить стейт
  subscribe(observer) {
    this._callSubscriber = observer;
  }, // подписаться на ф. перерисовки

  dispatch(action) {
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profile.NEW_POST_TEXT = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === ADD_POST) {
      const newPost = { message: this._state.profile.NEW_POST_TEXT }
      this._state.profile.ARR_POSTS.push(newPost);
      this._state.profile.NEW_POST_TEXT = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogs.NEW_MESSAGE_TEXT = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === ADD_MESSAGE) {
      let newMessage = this._state.dialogs.NEW_MESSAGE_TEXT;
      this._state.dialogs.ARR__MESSAGES.push(newMessage);
      this._state.dialogs.NEW_MESSAGE_TEXT = '';
      this._callSubscriber(this._state);
    }
  },
}

export const ADD_MESSAGE_actionCreator = () => ({ type: ADD_MESSAGE });
export const UPDATE_NEW_MESSAGE_actionCreator = (text) => (
  {
    type: UPDATE_NEW_MESSAGE,
    newText: text,
  }
)
export const UPDATE_NEW_POST_actionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const ADD_POST_actionCreator = () => ({ type: ADD_POST });


window.store = store;
