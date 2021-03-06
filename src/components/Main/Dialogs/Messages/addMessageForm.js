import React from "react";
import s from "./Messages.module.css";
import { Form, Field } from 'react-final-form';
import { required } from "../../../../utils/validation/validation";

export const AddMessageForm = ({ dialogs, onSent }) => {

  return (
    <Form
      onSubmit={onSent}
      render={({ handleSubmit }) => (
        <form className={s.messages__formSent} onSubmit={handleSubmit}>
          <Field name={"newMessageBody"} type="email" validate={required}>
            {({ input }) => (
              <label className={`label`}>
              <textarea
                className={`textarea ${s.messages__textarea}`}
                rows="5"
                value={dialogs.NEW_MESSAGE_TEXT}
                {...input}
              />
              </label>
            )}
          </Field>

          <div className={s.messages__ButtonsPosition}>
            <button className={`button ${s.messages__ButtonFormSent}`}>sent</button>
          </div>
        </form>
      )}
    />
  )
}
