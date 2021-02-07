import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './utils/normalize.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import state, { addMessage, addPost, updateNewPostMessage, updateNewPostText, subscribe } from './redux/state';

const rerenderEntreeTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          updateNewPostText={updateNewPostText}
          addPost={addPost}
          updateNewPostMessage={updateNewPostMessage}
          addMessage={addMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntreeTree(state);
subscribe(rerenderEntreeTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
