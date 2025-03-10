
import { Button } from "@/components/ui/button";
import { useFormContext } from "./FormContext";
import { Loader2 } from "lucide-react";

export const FormNavigation = () => {
  const { formStep, handlePrevStep, handleNextStep, handleSubmitApplication, isSubmitting } = useFormContext();

  return (
    <div className="flex justify-between">
      {formStep > 1 && (
        <Button variant="outline" onClick={handlePrevStep} disabled={isSubmitting}>
          Back
        </Button>
      )}
      {formStep < 3 ? (
        <Button className="bg-secondary hover:bg-secondary/90 ml-auto" onClick={handleNextStep} disabled={isSubmitting}>
          Next Step
        </Button>
      ) : (
        <Button 
          className="bg-secondary hover:bg-secondary/90 ml-auto" 
          onClick={handleSubmitApplication} 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      )}
    </div>
  );
};
