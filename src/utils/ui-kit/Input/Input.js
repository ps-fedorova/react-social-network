import React from "react";
import s from "./Input.module.css";

export const Input = ({ input, meta, id, placeholder, auth }) => {
  // const [showError, setShowError] = React.useState(meta.touched && meta.error);
  const showError = meta.error && (meta.dirty || meta.submitFailed) && meta.touched;

  return (
    <label className={`label ${s.profilePosts__label}`} htmlFor={id}>
      <input
        {...input}
        className={`input ${s.profilePosts__input} 
                  ${auth ? s.profilePosts__input_auth : ""}
                  ${showError && auth ? s.profilePosts__input_error_auth : ""}`}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
      />
      {showError && <span className={`${s.form__error} ${auth ? s.form__error_auth : ""}`}>{meta.error}</span>}
    </label>
  )
}
