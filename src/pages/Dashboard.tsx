
import { useAuth } from "@/contexts/AuthContext";
import { Helmet } from "react-helmet-async";
import { CandidateDashboard } from "@/components/dashboard/CandidateDashboard";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";

const Dashboard = () => {
  const { profile, loading } = useAuth();

  // If loading, show skeleton
  if (loading) {
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
