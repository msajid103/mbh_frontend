import { Navigate } from "react-router-dom";

const ProtectedRoute =({ children }) =>{
  const isAuthenticated = true;
//   const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
}



export default ProtectedRoute;