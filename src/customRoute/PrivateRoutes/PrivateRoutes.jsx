// src/components/PrivateRoute.js
import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return <Outlet />;
};

export default PrivateRoute;
