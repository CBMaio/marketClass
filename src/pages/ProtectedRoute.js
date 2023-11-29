import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const isAuth = useSelector((state) => state.auth);

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
}
