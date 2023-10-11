import React from "react";
import Corporativo from "../pages/corporativo/Corporativo";
import Home from "../pages/home/Home";
import Sustentabilidad from "../pages/sustentabilidad/Sustentabilidad";
import SobreAgromyss from "../pages/sobreAgromyss/SobreAgromyss";
import Chocolatinas from "../modules/productos/chocolates/Chocolatinas";

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
    path: "/productos-servicios/productos/chocolates/chocolatinas",
    component: <Chocolatinas />,
  },
  {
    path: "/sustentabilidad",
    component: <Sustentabilidad />,
  },
  {
    path: "/sustentabilidad/:item",
    component: <Sustentabilidad />,
  },
  {
    path: "/sobre-agromyss",
    component: <SobreAgromyss />,
  },

  {
    path: "/sobre-agromyss/:item",
    component: <SobreAgromyss />,
  },
];
