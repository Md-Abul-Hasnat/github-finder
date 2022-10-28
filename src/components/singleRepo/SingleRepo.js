import React from "react";
import "./SingleRepo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";

const SingleRepo = (props) => {
  const { description, name, created_at, visibility, html_url } = props.data;

  let msec = Date.parse(created_at);
  const date = new Date(msec);

  return (
    <a className="parent-a" href={html_url} target="_blank" rel="noreferrer">
      <article className="repository">
        <h3>
          <FontAwesomeIcon className="icon2" icon={faShield} /> {name}
          <small className="visibility">
            <small> {visibility} </small>
          </small>
        </h3>
        <p>{description} </p>
        <div className="repo-stats">
          <p>Published at : {date.toDateString()} </p>
        </div>
      </article>
    </a>
  );
};

export default SingleRepo;
