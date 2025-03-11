
import { Button } from "@/components/ui/button";
import { Menu, Download, Upload, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface DashboardHeaderProps {
  onMenuToggle: () => void;
  onExport: (type: string) => void;
  onImport: () => void;
  onLogout: () => void;
}

export const DashboardHeader = ({
  onMenuToggle,
  onExport,
  onImport,
  onLogout,
}: DashboardHeaderProps) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUserEmail(data.user.email);
      }
    };

    getUserInfo();
  }, []);

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden mr-2"
          onClick={onMenuToggle}
        >
          <Menu size={24} />
        </Button>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h2>
          {userEmail && (
            <p className="text-sm text-muted-foreground">Logged in as: {userEmail}</p>
          )}
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => onExport('CSV')}
          >
            <Download size={16} />
            <span className="hidden sm:inline">Export CSV</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => onExport('Excel')}
          >
            <Download size={16} />
            <span className="hidden sm:inline">Export Excel</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={onImport}
          >
            <Upload size={16} />
            <span className="hidden sm:inline">Import</span>
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onLogout}
          className="flex items-center gap-1"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </Button>
      </div>
      
      <Button 
        variant="outline" 
        className="md:hidden"
        size="sm"
        onClick={onLogout}
      >
        <LogOut size={16} />
      </Button>
    </div>
  );
};
