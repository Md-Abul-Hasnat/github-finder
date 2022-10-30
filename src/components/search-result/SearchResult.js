import React, { useContext } from "react";
import "./searchResult.css";
import Users from "../users/Users";
import { MainContext } from "../globalContext/GlobalContext";
import Loader from "../loader/Loader";

const SearchResult = () => {
  const { users, loading } = useContext(MainContext);

  return (
    <>
      {loading ? (
        <Loader height={35} />
      ) : (
        <section className="search-result-section">
          {users?.map((user) => (
            <Users key={user.id} data={user} />
          ))}
        </section>
      )}
    </>
  );
};

export default SearchResult;
