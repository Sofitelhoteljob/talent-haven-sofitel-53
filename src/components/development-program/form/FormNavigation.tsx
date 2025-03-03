
import { Button } from "@/components/ui/button";
import { useFormContext } from "./FormContext";

export const FormNavigation = () => {
  const { formStep, handlePrevStep, handleNextStep, handleSubmitApplication } = useFormContext();

  return (
    <div className="flex justify-between">
      {formStep > 1 && (
        <Button variant="outline" onClick={handlePrevStep}>
          Back
        </Button>
      )}
      {formStep < 3 ? (
        <Button className="bg-secondary hover:bg-secondary/90 ml-auto" onClick={handleNextStep}>
          Next Step
        </Button>
      ) : (
        <Button className="bg-secondary hover:bg-secondary/90 ml-auto" onClick={handleSubmitApplication}>
          Submit Application
        </Button>
      )}
    </div>
  );
};
