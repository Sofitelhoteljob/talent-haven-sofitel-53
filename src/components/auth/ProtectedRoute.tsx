import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!loading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, loading, navigate]);

  // If loading, show skeleton
  if (loading) {
    return <DashboardSkeleton />;
  }

  // If no user (and not redirected yet), show loading
  if (!user) {
    return <DashboardSkeleton />;
  }

  // Otherwise, render the children
  return <>{children}</>;
};
