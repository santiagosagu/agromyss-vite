import React from "react";
import Corporativo from "../pages/corporativo/Corporativo";
import Home from "../pages/home/Home";

export const freeRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/corporativo",
    component: <Corporativo />,
  },
];
