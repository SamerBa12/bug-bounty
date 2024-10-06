import { createBrowserRouter } from "react-router-dom";
import {Register}  from '../pages/Register/Register'
import {Login} from '../pages/Login/Login'
import HomePage from "../pages/HomePage/HomePage";
import PersonalInfoRe from "../pages/PersonaInfo/PersonalInfoRe";

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
  {
    path:"/home-page",
    element:<HomePage/>,
    name:"home-page"
  },
  {
    path:"/personal-info-re",
    element:<PersonalInfoRe/>,
    name:"personal-info-re"
  }
 
];


export const router = createBrowserRouter(
  routes.map(route => ({
    path: route.path,
    element: route.element,
  }))
);


