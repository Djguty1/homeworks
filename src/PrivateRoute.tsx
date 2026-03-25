import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PrivateRoute({ children }: any) {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/" />;
}

export default PrivateRoute;