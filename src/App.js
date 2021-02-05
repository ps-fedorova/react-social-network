import React from "react";

import './App.css';
import "./utils/utils.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar";


function App(props) {
  const {ARR__POSTS, ARR__NAME} = props;
  return (
    <div className="app">
      <Header/>
      <NavBar/>
      <Main ARR__POSTS={ARR__POSTS} ARR__NAME={ARR__NAME}/>
    </div>
  );
}

export default App;
