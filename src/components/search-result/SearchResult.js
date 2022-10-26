import React, { useContext } from "react";
import "./searchResult.css";
import Users from "../users/Users";
import { MainContext } from "../globalContext.js/GlobalContext";

const SearchResult = () => {
  const { users, loading, error } = useContext(MainContext);

  return (
    <section className="search-result-section">
      {users?.map((user) => (
        <Users key={user.id} data={user} />
      ))}
    </section>
  );
};

export default SearchResult;
