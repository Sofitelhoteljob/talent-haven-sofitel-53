
import { Users, FileText, Database } from "lucide-react";
import { StatCard } from "../overview/StatCard";
import { ActivityList } from "../overview/ActivityList";

export const OverviewTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Total Users" 
          value={120} 
          description="+8% from last month" 
          icon={Users} 
        />
        
        <StatCard 
          title="Job Applications" 
          value={34} 
          description="+12% from last month" 
          icon={FileText} 
        />
        
        <StatCard 
          title="Content Updates" 
          value={12} 
          description="Last updated 2 days ago" 
          icon={Database} 
        />
      </div>
      
      <ActivityList />
    </>
  );
};
