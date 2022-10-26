import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-wrapper">
        <Link to="/">
          <div className="logo">
            <FontAwesomeIcon className="logo-icon" icon={faGithub} />
            <h4>Github Finder</h4>
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
