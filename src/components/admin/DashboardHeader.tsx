
import { Button } from "@/components/ui/button";
import { Menu, Download, Upload } from "lucide-react";

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
        <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
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
        >
          Logout
        </Button>
      </div>
      
      <Button 
        variant="outline" 
        className="md:hidden"
        size="sm"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
};
