import React, { createContext, useState } from "react";

export const MainContext = createContext();

const GlobalContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function fetchUsers(text) {
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
      value={{ setUsers, users, loading, error, fetchUsers }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default GlobalContext;
