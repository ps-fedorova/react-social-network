import React from "react";
import { Form, Field } from 'react-final-form';
import s from "../ProfilePosts.module.css";
import { composeValidators, maxLength, required } from "../../../../../utils/validation/validation";
import { Input } from "../../../../../utils/ui-kit/Input/Input";


export const ProfilePostForm = ({ onAddPost }) => {
  return (
    <Form
      onSubmit={onAddPost}
      render={({ handleSubmit }) => (
        <form className={`list ${s.profilePosts__form}`} onSubmit={handleSubmit}>
          <Field
            name="newPostBody"
            type="text"
            placeholder="post message"
            id="post"
            component={Input}
            validate={composeValidators(required, maxLength(20))}
          >
          </Field>
          <button className={`button post__item ${s.profilePosts__button}`} type="submit">{"add"}</button>
        </form>
      )}
    />
  )
}

// disabled={meta.touched && meta.error}
