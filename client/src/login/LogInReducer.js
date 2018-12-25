const loginReducer = (state, action) => {
  if (state === undefined) 
    return {
      user: {
        first_name: "",
        surname: ""
      },
      user_signed_in: false
    };
  
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state
      };
    case "SIGN_IN_FAIL":
      return {
        ...state,
        error: action.error
      };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        user_signed_in: true,
        user: {
          ...state.user,
          access_token: action.access_token,
          first_name: action.first_name,
          surname: action.surname
        }
      };
    default:
      return state;
  }
};
export default loginReducer;
