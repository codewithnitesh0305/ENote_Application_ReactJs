import { isLoggedIn } from "../LocalStorage/TokenStorage";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter() {
  const IsLoggedIn = isLoggedIn();
  console.log("IsLoggedIn "+ IsLoggedIn);
  return IsLoggedIn === "true" ? <Outlet/> : <Navigate to="/"/>;
}

export default ProtectedRouter;
