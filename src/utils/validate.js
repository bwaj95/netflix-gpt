export const validateSignInData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!isEmailValid) return "Email is not valid.";

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isPasswordValid) return "Password is not valid.";

  return null;
};

export const validateSignUpData = (name, email, password) => {
  const isNameValid = /^([a-zA-Z ]){5,30}$/.test(name);

  if (!isNameValid) return "Invalid Name";

  return validateSignInData(email, password);
};
