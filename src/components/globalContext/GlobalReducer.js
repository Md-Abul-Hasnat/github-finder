function GlobalReducer(state, action) {
  switch (action.type) {
    case "FETCH__SUCCESSFULL":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "FETCH_USER_SUCCESSFULL":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "CLEAN-USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

export default GlobalReducer;
