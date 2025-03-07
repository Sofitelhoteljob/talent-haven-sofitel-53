
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Helmet } from "react-helmet-async";
import { CandidateDashboard } from "@/components/dashboard/CandidateDashboard";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";

const Dashboard = () => {
  const { user, profile, loading } = useAuth();
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

  return (
    <>
      <Helmet>
        <title>Your Dashboard | Sofitel Frankfurt Opera</title>
        <meta name="description" content="Track your application status and manage your profile" />
      </Helmet>
      
      <CandidateDashboard profile={profile} />
    </>
  );
};

export default Dashboard;
