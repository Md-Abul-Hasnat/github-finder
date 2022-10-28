import React from "react";
import "./loader.css";

const Loader = (props) => {
  return (
    <div style={{ height: `${props.height}vh` }} className="loader">
      <h1>Loading ....</h1>
    </div>
  );
};

export default Loader;
