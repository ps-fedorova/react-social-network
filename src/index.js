import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ARR__POSTS = [
  "Большие города",
  "Пустые поезда",
  "Ни берега, ни дна",
  "Все начинать сначала",
  "Холодная война",
  "И время как вода",
  "Он не сошел с ума",
  "Ты ничего не знала",
];

const ARR__NAME = ["Лиза", "Лена", "Света", "Даша", "Саша"];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App ARR__POSTS={ARR__POSTS} ARR__NAME={ARR__NAME}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
