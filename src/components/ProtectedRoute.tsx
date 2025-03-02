import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  requiredRole?: Role;
}

export default function ProtectedRoute({ requiredRole }: ProtectedRouteProps) {

  const { isAuthenticated, loading, user } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (requiredRole && !user?.roles?.includes(requiredRole)) return <Navigate to="/NotFound" replace />;
  
  return <Outlet />;
}