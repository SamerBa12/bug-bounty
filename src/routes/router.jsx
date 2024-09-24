import { createBrowserRouter } from "react-router-dom";
import {Register}  from '../pages/Register/Register'
import {Login} from '../pages/Login/Login'

const routes = [
  {
    path: "/",
    element: <Register />,
    name: "register",
  },
  {
    path: "/login",
    element: <Login />,
    name: "login"
  },
 
];


export const router = createBrowserRouter(
  routes.map(route => ({
    path: route.path,
    element: route.element,
  }))
);


