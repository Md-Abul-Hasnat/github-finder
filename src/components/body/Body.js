import React from "react";
import "./body.css";
import Input from "../input/Input";
import SearchResult from "../search-result/SearchResult";

const Body = () => {
  return (
    <main className="body">
      <div className="body-wrapper">
        <div className="input-field">
          <Input />
        </div>
        <div className="search-result">
          <SearchResult />
        </div>
      </div>
    </main>
  );
};

export default Body;
