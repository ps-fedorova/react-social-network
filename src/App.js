import React from "react";
import './App.css';
import "./utils/utils.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar";

function App(props) {
  const { store } = props;
  return (
    <div className="app">
      <Header/>
      <NavBar/>
      <Main store={store}/>
    </div>
  );
}

export default App;
