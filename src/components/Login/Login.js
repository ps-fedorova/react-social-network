import React from "react";
import s from "./Login.module.css"

// Create New Account

const Login = () => {
  return (
    <form className={s.form}>
      <div className={s.position}>
        <h2 className={s.h2}>Login</h2>

        <label className={s.label} htmlFor="email">
          <input className={s.input} type="text" placeholder="email" id="email" required/>
        </label>

        <label className={s.label} htmlFor="psw">
          <input className={s.input} type="password" placeholder="password" id="password" required/>
        </label>

        <div className={s["rememberMe-container"]}>
          <label className={s["rememberMe-label"]} htmlFor="rememberMe">remember me</label>
          <input className={s.rememberMe} type="checkbox" id="rememberMe"/>
        </div>

        <button className={`button ${s.button}`} type="submit">Login</button>
      </div>
    </form>
  )

}

export default Login;
