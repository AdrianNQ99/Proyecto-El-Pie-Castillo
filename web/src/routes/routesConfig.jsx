import React from "react";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";

export const routesConfig = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Menu",
    path: "/menu",
    component: <Menu />,
  },
  {
    name: "Booking",
    path: "/booking",
    component: <Booking />,
  },
  {
    name: "Contact",
    path: "/contact",
    component: <Contact />,
  },
];
