const LogInReducer = (state, action) => {
  if (state === undefined) 
    return {
      user: {
        first_name: "",
        surname: ""
      },
      user_logged_in: false
    };
  
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state
      };
    case "LOG_IN_FAIL":
      return {
        user: {
          first_name: "",
          surname: ""
        },
        user_logged_in: false,
        error: action.message
      };
    case "LOG_IN_SUCCESS":
      return {
        user_logged_in: true,
        user: {
          access_token: action.user.auth_token,
          first_name: action.user.first_name,
          surname: action.user.surname
        }
      };
    default:
      return state;
  }
};
export default LogInReducer;
