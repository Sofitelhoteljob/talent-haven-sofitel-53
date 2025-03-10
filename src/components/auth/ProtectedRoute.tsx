
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
    if (!loading && !user) {
      // Redirect to login with the intended destination
      const currentPath = window.location.pathname;
      navigate(`/login?redirect=${encodeURIComponent(currentPath)}`, { replace: true });
    }
  }, [user, loading, navigate]);

  // Show skeleton while checking auth status
  if (loading) {
    return <DashboardSkeleton />;
  }

  // If there's no user and we haven't redirected yet, show loading
  if (!user) {
    return <DashboardSkeleton />;
  }

  // If we have a user, render the protected content
  return <>{children}</>;
};
