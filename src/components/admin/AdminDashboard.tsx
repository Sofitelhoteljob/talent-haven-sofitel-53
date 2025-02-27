
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { DashboardHeader } from "./DashboardHeader";
import { MobileMenu } from "./MobileMenu";
import { OverviewTab } from "./tabs/OverviewTab";
import { UsersTab } from "./tabs/UsersTab";
import { ContentTab } from "./tabs/ContentTab";
import { SettingsTab } from "./tabs/SettingsTab";

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleExportData = (type: string) => {
    // In a real application, this would call an API to generate the export
    toast({
      title: `Exporting data as ${type}`,
      description: "Your file will be downloaded shortly.",
    });
    
    // Simulate file download
    setTimeout(() => {
      toast({
        title: "Export completed",
        description: `Data has been exported as ${type} successfully.`,
      });
    }, 1500);
  };

  const handleImportData = () => {
    // This would typically open a file input dialog
    // For now, we'll just show a toast message
    toast({
      title: "Import feature",
      description: "File import functionality will be implemented soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <DashboardHeader 
          onMenuToggle={() => setMobileMenuOpen(true)}
          onExport={handleExportData}
          onImport={handleImportData}
          onLogout={onLogout}
        />

        {mobileMenuOpen && (
          <MobileMenu 
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onClose={() => setMobileMenuOpen(false)}
            onExport={handleExportData}
            onImport={handleImportData}
            onLogout={onLogout}
          />
        )}

        <Tabs 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-6 hidden md:inline-flex">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>
          
          <TabsContent value="users">
            <UsersTab onExport={handleExportData} />
          </TabsContent>
          
          <TabsContent value="content">
            <ContentTab onExport={handleExportData} />
          </TabsContent>
          
          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
