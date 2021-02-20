import React from 'react';
import s from "./Spinner.module.css";
import spinner from "../../../images/spinner.svg";

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <img src={spinner} alt="Loading"/>
    </div>
  )
}

export default Spinner
