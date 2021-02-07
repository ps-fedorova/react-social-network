import React from "react";
import './App.css';
import "./utils/utils.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar";

function App(props) {
  const { state, updateNewPostText, addPost, updateNewPostMessage, addMessage} = props;
  return (
    <div className="app">
      <Header/>
      <NavBar navBar={state.navBar}/>
      <Main
        profile={state.profile}
        dialogs={state.dialogs}
        updateNewPostText={updateNewPostText}
        addPost={addPost}
        updateNewPostMessage={updateNewPostMessage}
        addMessage={addMessage}
      />
    </div>
  );
}

export default App;
