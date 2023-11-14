import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../features/auth/authSlice";

export default function ProtectedRoute() {
  const isAuth = useSelector(isAuthenticated);
  console.log(isAuth);

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
}
