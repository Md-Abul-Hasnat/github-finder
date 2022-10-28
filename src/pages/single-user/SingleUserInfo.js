import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../components/globalContext.js/GlobalContext";
import SingleUserDetails from "../../components/singleUserDetails/SingleUserDetails";

const SingleUserInfo = () => {
  const { id } = useParams();

  const { setUser, setLoading } = useContext(MainContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SingleUserDetails />
    </>
  );
};

export default SingleUserInfo;
