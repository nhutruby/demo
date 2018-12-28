export const auth = authToken => {
  return {type: "AUTH", payload: authToken};
};
export const authSuccess = (firstName, lastName) => {
  return {type: "AUTH_SUCCESS", first_name: firstName, surname: lastName};
};
export const authFail = error => {
  return {type: "AUTH_FAIL", error: error};
};
