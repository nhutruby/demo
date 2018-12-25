export const signUp = () => {
  return {type: "SIGN_UP"};
};
export const signUpSuccess = (firstName, lastName) => {
  return {type: "SIGN_UP_SUCCESS", first_name: firstName, last_name: lastName};
};

export const signUpFail = error => {
  return {type: "SIGN_UP_FAIL", error: error};
};