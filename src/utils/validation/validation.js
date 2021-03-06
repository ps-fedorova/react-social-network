export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const required = (value) => {
  if (value) {
    return undefined;
  } else return "Field is required";
}

export const maxLength = (maxLength) => (value) => {
  if (value && value.length < maxLength) {
    return undefined;
  } else return `Max length ${maxLength} symbols`;
}

export const minLength = (minLength) => (value) => {
  if (value && value.length > minLength) {
    return undefined;
  } else return `Min length ${minLength} symbols`;
}

export const validEmail = (value) => {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return undefined
  } else return 'Invalid email';
}
