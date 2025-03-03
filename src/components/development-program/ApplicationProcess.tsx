
import { Badge } from "@/components/ui/badge";

export const ApplicationProcess = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
          1
        </div>
        <div>
          <h3 className="font-playfair text-xl font-medium mb-2">Submit Online Application</h3>
          <p className="text-muted-foreground">Complete our comprehensive application form with your personal details, professional experience, and program preferences.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
          2
        </div>
        <div>
          <h3 className="font-playfair text-xl font-medium mb-2">Virtual Interview</h3>
          <p className="text-muted-foreground">Selected candidates will be invited for a virtual interview with our recruitment team to discuss your experience and aspirations.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
          3
        </div>
        <div>
          <h3 className="font-playfair text-xl font-medium mb-2">Employment Guarantee Bond</h3>
          <p className="text-muted-foreground">Secure your place in the program with the €1,000 Employment Guarantee Bond, fully refundable after 12 months of successful employment.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
          4
        </div>
        <div>
          <h3 className="font-playfair text-xl font-medium mb-2">Visa Processing</h3>
          <p className="text-muted-foreground">Our team will assist you with the visa application process, providing all necessary documentation and guidance.</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
          5
        </div>
        <div>
          <h3 className="font-playfair text-xl font-medium mb-2">Pre-Departure Orientation</h3>
          <p className="text-muted-foreground">Receive comprehensive information about your role, living in Germany, and what to expect upon arrival.</p>
        </div>
      </div>
    </div>
  );
};
