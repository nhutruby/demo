export const signOut = authToken => {
  return {type: "SIGN_OUT", payload: authToken};
};
export const signOutSuccess = (firstName, lastName) => {
  return {type: "SIGN_OUT_SUCCESS", first_name: firstName, surname: lastName};
};
export const signOutFail = error => {
  return {type: "SIGN_OUT_FAIL", error: error};
};
