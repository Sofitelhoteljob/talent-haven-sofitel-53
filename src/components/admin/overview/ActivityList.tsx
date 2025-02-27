
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface ActivityItem {
  id: string;
  title: string;
  type: string;
  time: string;
  timeAgo: string;
}

export const ActivityList = () => {
  const [activityItems, setActivityItems] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        // Fetch analytics events
        const { data: analyticsData, error: analyticsError } = await supabase
          .from('analytics')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);

        // Fetch recent applications
        const { data: applicationsData, error: applicationsError } = await supabase
          .from('job_applications')
          .select('*, jobs(title)')
          .order('created_at', { ascending: false })
          .limit(5);

        if (analyticsError || applicationsError) {
          throw new Error('Failed to fetch activity data');
        }

        // Combine and format the data
        const combinedActivity: ActivityItem[] = [
          ...(analyticsData || []).map(item => {
            const eventData = item.event_data || {};
            const createdAt = new Date(item.created_at);
            
            return {
              id: item.id,
              title: item.event_type === 'job_view' 
                ? 'Job listing viewed' 
                : 'Analytics event recorded',
              type: item.event_type,
              time: createdAt.toISOString(),
              timeAgo: getTimeAgo(createdAt)
            };
          }),
          ...(applicationsData || []).map(item => {
            const createdAt = new Date(item.created_at);
            const jobTitle = item.jobs?.title || 'Unknown position';
            
            return {
              id: item.id,
              title: `New application for ${jobTitle}`,
              type: 'application',
              time: createdAt.toISOString(),
              timeAgo: getTimeAgo(createdAt)
            };
          })
        ];

        // Sort by time
        combinedActivity.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
        
        // Take only the 5 most recent
        setActivityItems(combinedActivity.slice(0, 5));
      } catch (error) {
        console.error('Error fetching activity data:', error);
        setActivityItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivity();
  }, []);

  // Helper function to format time ago
  const getTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions performed in the system</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="space-y-1">
                  <Skeleton className="h-5 w-64" />
                  <Skeleton className="h-4 w-40" />
                </div>
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        ) : activityItems.length > 0 ? (
          <div className="space-y-4">
            {activityItems.map((item) => (
              <div key={item.id} className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.type}</p>
                </div>
                <span className="text-sm text-muted-foreground">{item.timeAgo}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-4 text-muted-foreground">No recent activity found</p>
        )}
      </CardContent>
    </Card>
  );
};
