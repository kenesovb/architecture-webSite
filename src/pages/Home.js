import React, { Fragment, useEffect, useContext } from "react";
import { MainText } from "../components/home/MainText";
import { Loader } from "../components/Loader";
import { FirebaseContext } from "../context/firebase/FirebaseContext";

export const Home = () => {
  const { loading, text, getHomePageData } = useContext(FirebaseContext);
  useEffect(() => {
    getHomePageData();
  }, []);

  console.log("text from reducer ", text);
  return (
    <Fragment>
      {loading ? <Loader /> : <MainText text={text.firstText} />}
    </Fragment>
  );
};
