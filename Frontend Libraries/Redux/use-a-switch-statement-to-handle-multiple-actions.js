const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
  switch (action.type) {
    case "LOGIN":
      state= {
        authenticated: true
      };
      return state;
    case "LOGOUT":
        state= {
        authenticated: false
      };
      return state;
    default:
      return defaultState;
  }
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN"
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT"
  };
};