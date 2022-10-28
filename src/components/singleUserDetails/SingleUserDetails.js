import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../globalContext.js/GlobalContext";
import Loader from "../loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBox,
  faHotel,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./singleUserDetails.css";
import SingleRepo from "../singleRepo/SingleRepo";

const SingleUserDetails = () => {
  const { user, loading } = useContext(MainContext);

  const [repository, setRepository] = useState([]);

  const {
    avatar_url,
    name,
    login,
    followers,
    html_url,
    type,
    public_gists,
    following,
    blog,
    bio,
    hireable,
    location,
    public_repos,
    repos_url,
    twitter_username,
  } = user;

  function fetchData() {
    fetch(`${repos_url}`)
      .then((res) => res.json())
      .then((data) => setRepository(data.slice(0, 10)));
  }

  useEffect(() => {
    fetchData();
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader height={82} />
      ) : (
        <section className="user-details">
          <div className="user-details-wrapper">
            <Link to="/" className="btn back-btn">
              <FontAwesomeIcon className="icon" icon={faArrowLeft} />
              Back to search
            </Link>
            <div className="user-top">
              <div className="user-top-left">
                <img src={avatar_url} alt="profile" />
                <div className="overlay-name">
                  <h4>{name ? name : "Not Found"} </h4>
                  <p>{login ? login : "Not Found"} </p>
                </div>
              </div>
              <div className="user-top-right">
                <div className="user-name-section">
                  <h1> {name ? name : "Not Found"}</h1>
                  <small> {type} </small>
                  <small> {hireable && "Hireable"} </small>
                </div>
                <p className="bio"> {bio} </p>
                <a
                  className="btn profile-btn"
                  href={html_url}
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit Github Profile
                </a>
                <div className="hyperlink">
                  <article>
                    <p>Location</p>
                    <h3> {location ? location : "Not Found"} </h3>
                  </article>
                  <article>
                    <p>Website</p>
                    {blog ? (
                      <a
                        href={`https://${blog}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {blog}
                      </a>
                    ) : (
                      <h3>Not Found</h3>
                    )}
                  </article>
                  <article>
                    <p>Twitter</p>
                    {twitter_username ? (
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {twitter_username}
                      </a>
                    ) : (
                      <h3>Not Found</h3>
                    )}
                  </article>
                </div>
              </div>
            </div>
            <div className="user-middle">
              <article className="middile-statistics">
                <div className="statistics-left">
                  <p>Followers</p>
                  <h2>{followers} </h2>
                </div>
                <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
              </article>
              <article className="middile-statistics">
                <div className="statistics-left">
                  <p>Following</p>
                  <h2>{following} </h2>
                </div>
                <FontAwesomeIcon className="icon" icon={faUser} />
              </article>
              <article className="middile-statistics">
                <div className="statistics-left">
                  <p>Public Repos</p>
                  <h2>{public_repos} </h2>
                </div>
                <FontAwesomeIcon className="icon" icon={faBox} />
              </article>
              <article className="middile-statistics">
                <div className="statistics-left">
                  <p>Public Gists</p>
                  <h2>{public_gists} </h2>
                </div>
                <FontAwesomeIcon className="icon" icon={faHotel} />
              </article>
            </div>
            <div className="user-bottom">
              <h2>Latest Repositories</h2>
              <div className="single-repo">
                {repository.map((repo, i) => (
                  <SingleRepo key={i} data={repo} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleUserDetails;
