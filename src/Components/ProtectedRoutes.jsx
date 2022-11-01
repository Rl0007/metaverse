import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../AuthContext";

function ProtectedRoutes() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to={"/signup"} />;
}
export const Check_Signup = () => {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to={"/"} /> : <Outlet />;
};
export default ProtectedRoutes;
