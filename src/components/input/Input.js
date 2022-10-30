import React, { useContext, useState } from "react";
import { MainContext } from "../globalContext/GlobalContext";
import "./input.css";

const Input = () => {
  const { clearUsers, users, fetchUsers } = useContext(MainContext);
  const [text, setText] = useState("");
  const [warning, setwarning] = useState("");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (text.length > 0) {
      fetchUsers(text);
    } else {
      setwarning("Please Inter Github Profile Name");
      setTimeout(() => {
        setwarning("");
      }, 3000);
    }

    setText("");
  }

  return (
    <section className="input-element">
      <small className="warning"> {warning} </small>
      <div className="flex">
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
      </div>
    </section>
  );
};

export default Input;
