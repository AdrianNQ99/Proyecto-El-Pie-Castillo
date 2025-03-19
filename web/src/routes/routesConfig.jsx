import React from "react";

import Menu from "../pages/Carta";
import Booking from "../pages/Reservas";
import Home from "../pages/Home";
import Gallery from "../pages/Galeria";
import MenuDelDia from "../pages/MenuDelDia";

export const routesConfig = [
  {
    name: "Inicio",
    path: "/",
    component: <Home />,
  },
  {
    name: "Menú del día",
    path: "/menu-del-dia",
    component: <MenuDelDia />,
  },
  {
    name: "Carta",
    path: "/menu",
    component: <Menu />,
  },
  {
    name: "Reservas",
    path: "/booking",
    component: <Booking />,
  },
  {
    name: "Galería",
    path: "/gallery",
    component: <Gallery />,
  }
];
