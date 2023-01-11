import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../context/auth/authContext";

const RequiredAuth = ({ children }) => {
  const contextAuth = useContext(authContext);

  // if (contextAuth.autenticado === null) {
  //   console.log("loading...");
  //   console.log(contextAuth);
  //   return <h1 className="mt-32">loading...</h1>;
  // }

  return <>{children}</>;

  // if (!contextAuth.isAdmin && contextAuth.autenticado !== null) {
  //   return <Navigate to="/" />;
  // }
};

export default RequiredAuth;
