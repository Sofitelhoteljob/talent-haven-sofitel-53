
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Users, Settings, FileText, Database, Download, Upload, Menu, X } from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For debugging
    console.log("Login attempt:", { username, password });
    
    // Simple authentication - in a real app, this would use a secure backend
    if (username === "Dirianuzi" && password === "Ddambaian123@") {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard.",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 pb-10 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Admin Login</h1>
            <p className="text-gray-500 mt-2">Enter your credentials to access the admin panel</p>
            <p className="text-gray-400 text-sm mt-1">(Username: Dirianuzi, Password: Ddambaian123@)</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Access the administrative dashboard</CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">Username</label>
                  <Input 
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Dirianuzi"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 h-full"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </Button>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  // Mobile menu for smaller screens
  const renderMobileMenu = () => {
    if (!mobileMenuOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
        <div className="bg-white h-full w-4/5 max-w-sm p-4 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Admin Menu</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(false)}
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
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
            
            <Separator className="my-4" />
            
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 mt-4"
              onClick={() => handleExportData('CSV')}
            >
              <Download size={16} />
              Export as CSV
            </Button>
            
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
              onClick={() => handleExportData('Excel')}
            >
              <Download size={16} />
              Export as Excel
            </Button>
            
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
              onClick={handleImportData}
            >
              <Upload size={16} />
              Import Data
            </Button>
            
            <Button 
              variant="destructive" 
              className="w-full mt-8"
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden mr-2"
              onClick={() => setMobileMenuOpen(true)}
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
                onClick={() => handleExportData('CSV')}
              >
                <Download size={16} />
                <span className="hidden sm:inline">Export CSV</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={() => handleExportData('Excel')}
              >
                <Download size={16} />
                <span className="hidden sm:inline">Export Excel</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={handleImportData}
              >
                <Upload size={16} />
                <span className="hidden sm:inline">Import</span>
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            className="md:hidden"
            size="sm"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </Button>
        </div>

        {/* Mobile menu renders here */}
        {renderMobileMenu()}

        {/* Desktop tabs */}
        <Tabs 
          defaultValue="overview" 
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">120</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">34</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Content Updates</CardTitle>
                  <Database className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Last updated 2 days ago</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions performed in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div key={index} className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">
                          {index % 2 === 0 ? "New job application submitted" : "Content page updated"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {index % 2 === 0 ? "By John Doe" : "By Admin User"}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {index === 0 ? "Just now" : `${index} hour${index > 1 ? "s" : ""} ago`}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>View and manage system users</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="hidden md:flex items-center gap-1" onClick={() => handleExportData('Users CSV')}>
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
          </TabsContent>
          
          <TabsContent value="content">
            <Card>
              <CardHeader className="flex justify-between items-center">
                <div>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>Manage website content and job listings</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="hidden md:flex items-center gap-1" onClick={() => handleExportData('Content CSV')}>
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
          </TabsContent>
          
          <TabsContent value="settings">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
