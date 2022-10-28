import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <h3>
        This app is usefull to find any github account . Just search the name of
        the account and you are good to go.You can also navigate to that github
        profile and specific repository by provided links.
      </h3>
      <Link className="btn back-btn" to="/">
        Let's Try It Out
      </Link>
    </section>
  );
};

export default About;
