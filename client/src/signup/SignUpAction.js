export const signUp = signUpParams => {
  return {type: 'SIGN_UP', payload: signUpParams};
};
export const signUpSuccess = (firstName, surname, email) => {
  return {type: 'SIGN_UP_SUCCESS', first_name: firstName, surname: surname};
};

export const signUpFail = error => {
  return {type: 'SIGN_UP_FAIL', error: error};
};
