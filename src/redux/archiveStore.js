import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sideBarReducer from "./reducers/sideBarReducer";

export const archiveStore = {
  _state: {
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
    dialogs: {
      ARR__NAME: ["Лиза", "Лена", "Света", "Даша", "Саша"],
      ARR__MESSAGES: ["Полковнику никто", "Не пишет", "Полковника никто", "Не ждёт"],
      NEW_MESSAGE_TEXT: ""
    },
    sideBar: {},
  },
  _callSubscriber() {
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }, // подписаться на ф. перерисовки
  getState() {
    return this._state
  }, // получить стейт
}

window.store = archiveStore;
