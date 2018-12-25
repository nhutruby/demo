export const signIn = () => {
  return {type: "SIGN_IN"};
};
export const signInSuccess = (accessToken, firstName, lastName) => {
  return {type: "SIGN_IN_SUCCESS", access_token: accessToken, first_name: firstName, last_name: lastName};
};
export const signInFail = error => {
  return {type: "SIGN_IN_FAIL", error: error};
};
