import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './utils/normalize.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
// import { store } from './redux/store';
import store from './redux/reduxStore';

const rerenderEntreeTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntreeTree(store.getState()); // первая отрисовка

// store.subscribe(rerenderEntreeTree); // отрисовка при изменении стейта

store.subscribe(() => { // отрисовка при изменении стейта
  let state = store.getState();
  rerenderEntreeTree(state);
});

reportWebVitals();
