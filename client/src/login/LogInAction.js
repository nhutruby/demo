export const logIn = authParams => {
  return {type: "LOG_IN", payload: authParams};
};
export const logInSuccess = (authToken, firstName, lastName) => {
  return {type: "LOG_IN_SUCCESS", auth_token: authToken, first_name: firstName, surname: lastName};
};
export const logInFail = error => {
  return {type: "LOG_IN_FAIL", error: error};
};
