
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Download } from "lucide-react";

interface UsersTabProps {
  onExport: (type: string) => void;
}

export const UsersTab = ({ onExport }: UsersTabProps) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle>User Management</CardTitle>
          <CardDescription>View and manage system users</CardDescription>
        </div>
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="hidden md:flex items-center gap-1" 
            onClick={() => onExport('Users CSV')}
          >
            <Download size={16} />
            Export Users
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center py-10">
          <p className="text-muted-foreground">User management functionality will be implemented soon.</p>
        </div>
      </CardContent>
    </Card>
  );
};
