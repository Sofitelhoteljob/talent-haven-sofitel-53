
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, Download, Upload } from "lucide-react";

interface MobileMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onClose: () => void;
  onExport: (type: string) => void;
  onImport: () => void;
  onLogout: () => void;
}

export const MobileMenu = ({
  activeTab,
  onTabChange,
  onClose,
  onExport,
  onImport,
  onLogout,
}: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="bg-white h-full w-4/5 max-w-sm p-4 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Admin Menu</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
          >
            <X size={24} />
          </Button>
        </div>
        
        <div className="space-y-2">
          {["overview", "users", "content", "settings"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                onTabChange(tab);
                onClose();
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
          
          <Separator className="my-4" />
          
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 mt-4"
            onClick={() => onExport('CSV')}
          >
            <Download size={16} />
            Export as CSV
          </Button>
          
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={() => onExport('Excel')}
          >
            <Download size={16} />
            Export as Excel
          </Button>
          
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={onImport}
          >
            <Upload size={16} />
            Import Data
          </Button>
          
          <Button 
            variant="destructive" 
            className="w-full mt-8"
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};
