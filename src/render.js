import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { updateNewPostText, addPost, updateNewPostMessage, addMessage } from "./redux/state";

export const rerenderEntreeTree = (state) => {
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
