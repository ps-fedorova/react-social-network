import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './utils/normalize.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from './redux/reduxStore';
import { Provider } from "react-redux";

const app = (
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
