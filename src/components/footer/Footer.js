import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <small>
        {" "}
        Made with <FontAwesomeIcon className="logo-icon" icon={faHeart} /> by
        WebDev Hasnat{" "}
      </small>
    </footer>
  );
};

export default Footer;
