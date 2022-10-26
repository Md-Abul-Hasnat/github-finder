import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUserInfo = () => {
  const { login } = useParams();
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <h1>sa</h1>
    </>
  );
};

export default SingleUserInfo;
