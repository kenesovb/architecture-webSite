import React, { useReducer } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { GET_TEXT, SHOW_LOADER } from "../types";
import firebasedb from "./firebasedb";

export const FirebaseState = ({ children }) => {
  const initalState = {
    text: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initalState);
  const res = firebasedb.database().ref("mainPageText/");
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const getHomePageData = () => {
    showLoader();
    res.on("value", (snapshot) => {
      const payload = snapshot.val();
      console.log("text from fstate", payload)
      dispatch({ type: GET_TEXT, payload });
      console.log("snapshot text ", payload);
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        getHomePageData,
        loading: state.loading,
        text: state.text,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
