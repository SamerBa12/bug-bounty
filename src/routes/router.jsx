import { createBrowserRouter } from "react-router-dom";
import {Register}  from '../pages/Register/Register'
import {Login} from '../pages/Login/Login'

import PersonalInfoRe from "../pages/PersonaInfo/PersonalInfoRe";
import { CodeRegister } from "../components/Forms/CodeRegister";
import { LoginReForm } from "../components/Forms/LoginReForm";
import HomePage from "../pages/researcher/ResearcherHomePage";
// import HomePageComp from "../pages/company/HomePageComp";
import ResearcherHomePage from "../pages/researcher/ResearcherHomePage";
import CompanyHomePage from "../pages/company/CompanyHomePage";

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
    path: "/login-researcher",
    element: <LoginReForm />,
    name: "login"
  },
  {
    path: "/register-code",
    element: <CodeRegister/>,
    name: "login"
  },
  {
    path:"/company-home-page",
    element:<CompanyHomePage/>,
    name:"company-home-page"
  },
  {
    path:"/researcher-home-page",
    element:<ResearcherHomePage/>,
    name:"/researcher-home-page"
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


