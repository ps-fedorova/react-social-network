import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './utils/normalize.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
// import { archiveStore } from './redux/archiveStore';
import store from './redux/reduxStore';
import { Provider } from "./StoreContext";

const rerenderEntreeTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntreeTree(store.getState()); // первая отрисовка

// archiveStore.subscribe(rerenderEntreeTree); // отрисовка при изменении стейта
// - подобное с редаксовским стором не сработает!

// редаксовский стор, когда уведомляет подписчиков, не передает им стейт
// задача метода subscribe просто уведомить

// каждый раз, когда стейт меняется, нам нужно руками запрашивать его у стора
store.subscribe(() => { // отрисовка при изменении стейта
  let state = store.getState();
  rerenderEntreeTree(state);
});

reportWebVitals();
