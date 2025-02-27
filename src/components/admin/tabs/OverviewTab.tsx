
import { useEffect, useState } from "react";
import { Users, FileText, Database } from "lucide-react";
import { StatCard } from "../overview/StatCard";
import { ActivityList } from "../overview/ActivityList";
import { supabase } from "@/integrations/supabase/client";

export const OverviewTab = () => {
  const [stats, setStats] = useState({
    applications: 0,
    jobs: 0,
    views: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch jobs count
        const { count: jobsCount, error: jobsError } = await supabase
          .from('jobs')
          .select('*', { count: 'exact', head: true });

        // Fetch applications count
        const { count: applicationsCount, error: applicationsError } = await supabase
          .from('job_applications')
          .select('*', { count: 'exact', head: true });

        // Fetch job view analytics
        const { count: viewsCount, error: viewsError } = await supabase
          .from('analytics')
          .select('*', { count: 'exact', head: true })
          .eq('event_type', 'job_view');

        if (jobsError || applicationsError || viewsError) {
          throw new Error('Failed to fetch statistics');
        }

        setStats({
          jobs: jobsCount || 0,
          applications: applicationsCount || 0,
          views: viewsCount || 0
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Job Listings" 
          value={isLoading ? "Loading..." : stats.jobs} 
          description="Active job positions" 
          icon={Database} 
        />
        
        <StatCard 
          title="Job Applications" 
          value={isLoading ? "Loading..." : stats.applications} 
          description="Total applications received" 
          icon={FileText} 
        />
        
        <StatCard 
          title="Job Views" 
          value={isLoading ? "Loading..." : stats.views} 
          description="Total job listing views" 
          icon={Users} 
        />
      </div>
      
      <ActivityList />
    </>
  );
};
