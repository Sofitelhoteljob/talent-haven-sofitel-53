
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Download } from "lucide-react";

interface ContentTabProps {
  onExport: (type: string) => void;
}

export const ContentTab = ({ onExport }: ContentTabProps) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle>Content Management</CardTitle>
          <CardDescription>Manage website content and job listings</CardDescription>
        </div>
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="hidden md:flex items-center gap-1" 
            onClick={() => onExport('Content CSV')}
          >
            <Download size={16} />
            Export Content
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center py-10">
          <p className="text-muted-foreground">Content management functionality will be implemented soon.</p>
        </div>
      </CardContent>
    </Card>
  );
};
