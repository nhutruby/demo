const AuthReducer = (state, action) => {
  if (state === undefined) 
    return {
      user: {
        first_name: "",
        surname: ""
      },
      auth: false
    };
  
  switch (action.type) {
    case "AUTH":
      return {
        ...state
      };
    case "AUTH_FAIL":
      return {
        ...state,
        auth: false,
        error: action.message
      };
    case "AUTH_SUCCESS":
      return {
        auth: true,
        user: {
          auth_token: action.user.auth_token,
          first_name: action.user.first_name,
          surname: action.user.surname
        }
      };
    default:
      return state;
  }
};
export default AuthReducer;
