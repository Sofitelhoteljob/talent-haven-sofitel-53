
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";

export const SettingsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
        <CardDescription>Configure application settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">General Settings</h3>
            <Separator className="mb-4" />
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Site Name</label>
                  <Input defaultValue="Sofitel Frankfurt Opera" />
                </div>
                <div>
                  <label className="text-sm font-medium">Contact Email</label>
                  <Input defaultValue="info@sofitel-frankfurt.com" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Import/Export Settings</h3>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Default Export Format</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="csv">CSV</option>
                  <option value="excel">Excel</option>
                  <option value="json">JSON</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Include Personal Data in Exports</label>
                <div className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" id="includePersonalData" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="includePersonalData" className="text-sm">Yes, include personal data</label>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Notification Settings</h3>
            <Separator className="mb-4" />
            <div className="text-center py-6">
              <p className="text-muted-foreground">Notification settings will be implemented soon.</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};
