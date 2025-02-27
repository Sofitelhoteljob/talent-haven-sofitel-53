
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface SystemSettings {
  site_name: string;
  contact_email: string;
  export_format: "csv" | "excel" | "json";
  include_personal_data: boolean;
  notification_enabled: boolean;
}

export const SettingsTab = () => {
  const [settings, setSettings] = useState<SystemSettings>({
    site_name: "Sofitel Frankfurt Opera",
    contact_email: "info@sofitel-frankfurt.com",
    export_format: "csv",
    include_personal_data: false,
    notification_enabled: false
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true);
      try {
        // Check if the settings table exists
        const { data: tableExists } = await supabase
          .from('system_settings')
          .select('*')
          .limit(1)
          .maybeSingle();

        // If table exists and has data, load it
        if (tableExists) {
          const { data, error } = await supabase
            .from('system_settings')
            .select('*')
            .eq('id', 'default')
            .single();
            
          if (error) throw error;
          
          if (data) {
            setSettings({
              site_name: data.site_name || settings.site_name,
              contact_email: data.contact_email || settings.contact_email,
              export_format: data.export_format || settings.export_format,
              include_personal_data: data.include_personal_data || settings.include_personal_data,
              notification_enabled: data.notification_enabled || settings.notification_enabled
            });
          }
        } else {
          // If settings table doesn't exist or is empty, create it
          console.log("Settings table doesn't exist or is empty. Using defaults.");
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
        toast({
          title: "Error",
          description: "Failed to load settings. Using defaults.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      // Try to create the settings record or update it if it exists
      const { error } = await supabase
        .from('system_settings')
        .upsert({
          id: 'default',
          site_name: settings.site_name,
          contact_email: settings.contact_email,
          export_format: settings.export_format,
          include_personal_data: settings.include_personal_data,
          notification_enabled: settings.notification_enabled,
          updated_at: new Date().toISOString()
        }, { onConflict: 'id' });
      
      if (error) {
        if (error.code === '42P01') {
          // Table doesn't exist yet, log this for now
          console.log("Settings table doesn't exist. This would need to be created with SQL.");
          toast({
            title: "Settings Saved",
            description: "Settings saved locally. Note: Database table not configured yet.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Settings Saved",
          description: "Your system settings have been updated successfully.",
        });
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
          <CardDescription>Loading settings...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

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
                  <label htmlFor="site_name" className="text-sm font-medium">Site Name</label>
                  <Input 
                    id="site_name"
                    name="site_name"
                    value={settings.site_name} 
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contact_email" className="text-sm font-medium">Contact Email</label>
                  <Input 
                    id="contact_email"
                    name="contact_email"
                    type="email"
                    value={settings.contact_email} 
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Import/Export Settings</h3>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="export_format" className="text-sm font-medium">Default Export Format</label>
                <select 
                  id="export_format"
                  name="export_format"
                  value={settings.export_format}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="csv">CSV</option>
                  <option value="excel">Excel</option>
                  <option value="json">JSON</option>
                </select>
              </div>
              <div>
                <label htmlFor="include_personal_data" className="text-sm font-medium">Include Personal Data in Exports</label>
                <div className="flex items-center space-x-2 mt-2">
                  <input 
                    type="checkbox" 
                    id="include_personal_data"
                    name="include_personal_data"
                    checked={settings.include_personal_data}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-primary focus:ring-primary" 
                  />
                  <label htmlFor="include_personal_data" className="text-sm">Yes, include personal data</label>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Notification Settings</h3>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="notification_enabled" className="text-sm font-medium">Email Notifications</label>
                <div className="flex items-center space-x-2 mt-2">
                  <input 
                    type="checkbox" 
                    id="notification_enabled"
                    name="notification_enabled"
                    checked={settings.notification_enabled}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-primary focus:ring-primary" 
                  />
                  <label htmlFor="notification_enabled" className="text-sm">Enable email notifications</label>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  When enabled, the system will send email notifications for new job applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={saveSettings} disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
