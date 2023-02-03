import React from "react";
import Corporativo from "../pages/corporativo/Corporativo";
import Home from "../pages/home/Home";
import Sustentabilidad from "../pages/sustentabilidad/Sustentabilidad";

export const freeRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/corporativo",
    component: <Corporativo />,
  },
  {
    path: "/sustentabilidad",
    component: <Sustentabilidad />,
  },
  {
    path: "/sustentabilidad/:item",
    component: <Sustentabilidad />,
  },
];
