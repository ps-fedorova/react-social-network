
import './App.css';
import "./utils/utils.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar";
import { addPost } from "./redux/state";


function App(props) {
  const { state, addPost } = props;
  return (
    <div className="app">
      <Header/>
      <NavBar state={state}/>
      <Main state={state} addPost={addPost}/>
    </div>
  );
}

export default App;
