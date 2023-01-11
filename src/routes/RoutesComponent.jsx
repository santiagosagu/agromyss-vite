import React from "react";
import RequiredAuth from "./RequiredAuth";
import { Route, Routes } from "react-router-dom";
import { freeRoutes } from "./freeRoutes";
import { safeRoutes } from "./safeRoutes";

const RoutesComponent = () => {
  return (
    <Routes>
      {freeRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      {safeRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <RequiredAuth>
              {/* <DocumentTitle title={`Beta - USA Buying Group - ${route.title}`}> */}
              {route.component}
              {/* </DocumentTitle> */}
            </RequiredAuth>
          }
        />
      ))}
    </Routes>
  );
};

export default RoutesComponent;
