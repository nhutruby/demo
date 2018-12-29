const SignUpReducer = (state, action) => {
  if (state === undefined) 
    return {
      user: {
        first_name: "",
        surname: ""
      },
      sign_up: false
    };
  
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state
      };
    case "SIGN_UP_FAIL":
      return {
        ...state,
        sign_up: false,
        error: action.message
      };
    case "SIGN_UP_SUCCESS":
      return {
        sign_up: true,
        user: {
          email: action.user.email,
          first_name: action.user.first_name,
          surname: action.user.surname
        }
      };
    default:
      return state;
  }
};
export default SignUpReducer;
