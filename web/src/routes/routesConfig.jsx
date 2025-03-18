import React from "react";

import Menu from "../pages/Menu";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";

export const routesConfig = [
  {
    name: "Menu",
    path: "/menu",
    component: <Menu />,
  },
  {
    name: "Reservas",
    path: "/booking",
    component: <Booking />,
  },
  {
    name: "Contact",
    path: "/contact",
    component: <Contact />,
  },
];
