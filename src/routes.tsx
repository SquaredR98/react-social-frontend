// import { useRoutes } from 'react-router-dom';

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

const element = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default element;
