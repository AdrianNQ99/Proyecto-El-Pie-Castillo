import Menu from "../pages/Carta";import Booking from "../pages/Reservas";
import Home from "../pages/Home";

export const routesConfig = [
  {
    name: "Inicio",
    path: "/",
    component: <Home />,
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
 
];
