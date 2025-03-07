
import { Skeleton } from "@/components/ui/skeleton";

export const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header skeleton */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Skeleton className="h-8 w-40" />
            <div className="hidden md:flex items-center space-x-4">
              <Skeleton className="h-9 w-9 rounded-full" />
              <Skeleton className="h-9 w-32" />
            </div>
            <Skeleton className="md:hidden h-9 w-9" />
          </div>
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-2">
          <Skeleton className="h-10 w-60" />
          <Skeleton className="h-5 w-80" />
        </div>
        
        <div className="space-y-6">
          <Skeleton className="h-10 w-full" />
          
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 space-y-4">
              <Skeleton className="h-7 w-40" />
              <div className="space-y-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
