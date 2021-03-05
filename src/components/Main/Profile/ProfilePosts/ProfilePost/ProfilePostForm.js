import React from "react";
import { Form, Field } from 'react-final-form';
import s from "../ProfilePosts.module.css";

export const ProfilePostForm = ({ onAddPost }) => {
  return (
    <Form
      onSubmit={onAddPost}
      render={({ handleSubmit }) => (
        <form className={`list ${s.profilePosts__form}`} onSubmit={handleSubmit}>
          <Field name="newPostBody">
            {({ input }) => (
              <label className={`label ${s.profilePosts__label}`} htmlFor="post">
                <input {...input} className={`input ${s.profilePosts__input}`} id="post" />
              </label>
            )}
          </Field>
          <button className={`button post__item ${s.profilePosts__button}`}>add</button>
        </form>
      )}
    />
  )
}
