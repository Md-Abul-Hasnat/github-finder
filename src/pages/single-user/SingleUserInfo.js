import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../components/globalContext/GlobalContext";
import SingleUserDetails from "../../components/singleUserDetails/SingleUserDetails";
import Loader from "../../components/loader/Loader";

const SingleUserInfo = () => {
  const { id } = useParams();

  const { fetchSingleUser, user } = useContext(MainContext);

  useEffect(() => {
    fetchSingleUser(id);
  }, []);

  return <>{user.repos_url ? <SingleUserDetails /> : <Loader height={82} />}</>;
};

export default SingleUserInfo;
