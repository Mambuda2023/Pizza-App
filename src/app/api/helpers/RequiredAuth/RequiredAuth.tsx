import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }: { children: ReactNode }) => {
  const jwt = localStorage.getItem("JWT");
  if (!jwt) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

export default RequiredAuth;
