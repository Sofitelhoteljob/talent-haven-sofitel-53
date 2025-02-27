
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

interface ActivityItem {
  title: string;
  author: string;
  time: string;
}

export const ActivityList = () => {
  // Generate some mock activity data
  const activityItems: ActivityItem[] = [1, 2, 3, 4, 5].map((_, index) => ({
    title: index % 2 === 0 ? "New job application submitted" : "Content page updated",
    author: index % 2 === 0 ? "By John Doe" : "By Admin User",
    time: index === 0 ? "Just now" : `${index} hour${index > 1 ? "s" : ""} ago`
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions performed in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activityItems.map((item, index) => (
            <div key={index} className="flex items-start justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.author}</p>
              </div>
              <span className="text-sm text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
