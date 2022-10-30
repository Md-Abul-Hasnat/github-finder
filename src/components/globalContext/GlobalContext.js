import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

export const MainContext = createContext();

const GlobalContext = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function fetchUsers(text) {
    dispatch({
      type: "SET_LOADING",
    });
    fetch(`https://api.github.com/search/users?q=${text}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH__SUCCESSFULL",
          payload: data.items,
        });
      })
      .catch((err) => console.log(err));
  }

  function fetchSingleUser(id) {
    dispatch({
      type: "SET_LOADING",
    });
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_USER_SUCCESSFULL",
          payload: data,
        });
      });
  }

  function clearUsers() {
    dispatch({
      type: "CLEAN-USERS",
      payload: [],
    });
  }

  return (
    <MainContext.Provider
      value={{
        fetchSingleUser,
        clearUsers,
        fetchUsers,
        users: state.users,
        loading: state.loading,
        user: state.user,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default GlobalContext;
