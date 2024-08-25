import { emailErrorMessage, fullNameErrorMessage, passwordErrorMessage } from "./constants";

export const fullNameValidator = (fullName) => {

  const isFullNameValid =
     /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(fullName);
     return !isFullNameValid ? fullNameErrorMessage : null;
};

export const emailValidator = (email) => {

  const isEmailValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    return !isEmailValid ? emailErrorMessage : null;
};


export const passwordValidator = (password) => {

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    return !isPasswordValid ? passwordErrorMessage : null;
};
