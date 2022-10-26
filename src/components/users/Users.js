import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

const Users = (props) => {
  const { avatar_url, login } = props.data;

  return (
    <Link to={`/user/${login}`}>
      <article className="user">
        <div className="image">
          <img src={avatar_url} alt="image" />
        </div>
        <div className="name">
          <h3> {login} </h3>
          <p>Visit Profile</p>
        </div>
      </article>
    </Link>
  );
};

export default Users;
