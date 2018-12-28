const SignOutReducer = (state, action) => {
  if (state === undefined) 
    return {
      user: {
        first_name: "",
        surname: ""
      },
      sign_out: false
    };
  
  switch (action.type) {
    case "SIGN_OUT":
      return {
        ...state
      };
    case "SIGN_OUT_FAIL":
      return {
        ...state,
        sign_out: false,
        error: action.message
      };
    case "SIGN_OUT_SUCCESS":
      return {
        sign_out: true,
        user: {
          first_name: action.user.first_name,
          surname: action.user.surname
        }
      };
    default:
      return state;
  }
};
export default SignOutReducer;
