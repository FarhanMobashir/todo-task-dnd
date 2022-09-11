import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ element }) => {
  const { user, sessionUser } = useAuth();
  if (user || sessionUser) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};
