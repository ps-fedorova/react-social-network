import React from "react";
import './App.css';
import "./utils/utils.css"
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <>
        <HeaderContainer/>
        <NavBar/>
        <Main/>
      </>
    </div>
  );
}

export default App;
