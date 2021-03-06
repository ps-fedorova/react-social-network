import React from "react";
import s from "./Login.module.css"
import { Form, Field } from 'react-final-form';
import { Input } from "../../utils/ui-kit/Input/Input";
import { composeValidators, maxLength, minLength, required, validEmail } from "../../utils/validation/validation";

// Create New Account

const Login = () => {

  const logIn = (values) => {
    console.log(values);
  }

  return (
    <Form
      onSubmit={logIn}
      render={({ handleSubmit }) => (
        <form className={s.form} onSubmit={handleSubmit} noValidate>
          <div className={s.position}>
            <h2 className={s.h2}>Login</h2>

            <Field
              name="email"
              type="email"
              placeholder="email"
              id="email"
              component={Input}
              auth={true}
              validate={composeValidators(required, validEmail)}
            >
            </Field>
            <Field
              name="password"
              type="password"
              placeholder="password"
              id="password"
              component={Input}
              auth={true}
              validate={composeValidators(required, minLength(6), maxLength(15))}
            >
            </Field>
            <Field
              name="rememberMeCheckbox"
              type="checkbox"
            >
              {({ input }) => (
                <div className={s["rememberMe-container"]}>
                  <label className={s["rememberMe-label"]} htmlFor="rememberMe">remember me</label>
                  <input {...input} className={s.rememberMe} id="rememberMe"/>
                </div>
              )}
            </Field>

            <button className={`button ${s.button}`} type="submit">Login</button>
          </div>
        </form>
      )
      }
    />
  )
}

export default Login;

