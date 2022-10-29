import React, { createContext, useState } from "react";

export const MainContext = createContext();

const GlobalContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchUsers(text) {
    setLoading(true);
    fetch(`https://api.github.com/search/users?q=${text}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }

  return (
    <MainContext.Provider
      value={{
        setUsers,
        setLoading,
        fetchUsers,
        setUser,
        users,
        loading,
        error,
        user,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default GlobalContext;
