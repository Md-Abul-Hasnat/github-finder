import React, { useContext, useState } from "react";
import { MainContext } from "../globalContext.js/GlobalContext";
import "./input.css";

const Input = () => {
  const { setUsers, users, fetchUsers } = useContext(MainContext);
  const [text, setText] = useState("");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetchUsers(text);
    setText("");
  }

  function clearUsers() {
    setUsers([]);
  }

  return (
    <section className="input-element">
      <form onSubmit={handleFormSubmit} className="input">
        <input
          onChange={handleInputChange}
          value={text}
          type="text"
          placeholder="Search"
        />
        <button className="btn" type="submit">
          Go
        </button>
      </form>

      {users.length > 0 && (
        <button onClick={clearUsers} className="btn clear">
          Clear
        </button>
      )}
    </section>
  );
};

export default Input;
