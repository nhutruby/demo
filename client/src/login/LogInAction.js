export const logIn = authParams => {
  return {type: "LOG_IN", payload: authParams};
};
export const logInSuccess = (accessToken, firstName, lastName) => {
  return {type: "LOG_IN_SUCCESS", access_token: accessToken, first_name: firstName, last_name: lastName};
};
export const logInFail = error => {
  return {type: "LOG_IN_FAIL", error: error};
};
