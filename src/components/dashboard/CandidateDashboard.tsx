
import { useState } from "react";
import { UserProfile } from "@/types/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardHeader } from "./DashboardHeader";
import { ProfileTab } from "./tabs/ProfileTab";
import { ApplicationTab } from "./tabs/ApplicationTab";
import { MessagesTab } from "./tabs/MessagesTab";
import { ResourcesTab } from "./tabs/ResourcesTab";
import { BondStatusTab } from "./tabs/BondStatusTab";

interface CandidateDashboardProps {
  profile: UserProfile | null;
}

export const CandidateDashboard = ({ profile }: CandidateDashboardProps) => {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader fullName={profile?.full_name || "Candidate"} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Candidate Dashboard</h1>
          <p className="text-muted-foreground">
            Track your application progress and manage your profile
          </p>
        </div>
        
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="application">Application</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="bond">Bond Status</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <ProfileTab profile={profile} />
          </TabsContent>
          
          <TabsContent value="application">
            <ApplicationTab />
          </TabsContent>
          
          <TabsContent value="messages">
            <MessagesTab />
          </TabsContent>
          
          <TabsContent value="resources">
            <ResourcesTab />
          </TabsContent>
          
          <TabsContent value="bond">
            <BondStatusTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};
