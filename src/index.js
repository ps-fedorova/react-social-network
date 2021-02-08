import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './utils/normalize.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { store } from './redux/state';

const rerenderEntreeTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          store={state}
          updateNewPostText={store.updateNewPostText.bind(store)}
          addPost={store.addPost.bind(store)}
          updateNewPostMessage={store.updateNewPostMessage.bind(store)}
          addMessage={store.addMessage.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntreeTree(store.getState()); // первая отрисовка
store.subscribe(rerenderEntreeTree); // отрисовка при изменении стейта

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
