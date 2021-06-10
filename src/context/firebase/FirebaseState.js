import React, { useReducer } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { GET_HOME_PAGE_DATA, GET_LINKS, SHOW_LOADER } from "../types";
import firebasedb from "./firebasedb";

export const FirebaseState = ({ children }) => {
  const initalState = {
    text: [],
    links: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initalState);
  const res = firebasedb.database().ref("mainPageText/");
  const links = firebasedb.database().ref("links/");
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const getHomePageData = () => {
    showLoader();
    res.on("value", (snapshot) => {
      const payload = snapshot.val();
      dispatch({ type: GET_HOME_PAGE_DATA, payload });
    });
  };

  const getLinks = () => {
    links.on("value", (snapshot) => {
      const payload = snapshot.val();
      console.log("payload from firebasdb ",payload)
      dispatch({ type: GET_LINKS, payload });
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        getHomePageData,
        getLinks,
        loading: state.loading,
        text: state.text,
        links: state.links,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
