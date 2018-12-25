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
        ...state,
        error: action.error
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        user_logged_in: true,
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
export default LogInReducer;
