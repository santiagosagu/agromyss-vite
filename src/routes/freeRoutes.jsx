import React from "react";
import Corporativo from "../pages/corporativo/Corporativo";
import Home from "../pages/home/Home";
import Sustentabilidad from "../pages/sustentabilidad/Sustentabilidad";
import SobreAgromyss from "../pages/sobreAgromyss/SobreAgromyss";
import Chocolatinas from "../modules/productos/chocolates/Chocolatinas";
import DetalleProducto from "../modules/detallesProductos/DetallesProducto";
import VideoCorporativoPagina from "../pages/VideoCorporativo";
import Products from "../pages/products/Products";
import Chocolates from "../pages/products/chocolates/Chocolates";

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
    path: "/corporativo/video-corporativo",
    component: <VideoCorporativoPagina />,
  },
  {
    path: "/productos-servicios/productos",
    component: <Products />,
  },
  {
    path: "productos-servicios/productos/chocolates",
    component: <Chocolates />,
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
  {
    path: "/productos-servicios/productos/:producto/:detalle",
    component: <DetalleProducto />,
  },
];
