import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Oops!!</h1>
      <h2>404 - Page Not Found</h2>
      <Link className="btn home-btn" to="/">
        BACK TO HOME
      </Link>
    </section>
  );
};

export default NotFound;
