
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormProvider } from "./form/FormContext";
import { PersonalInfoStep } from "./form/PersonalInfoStep";
import { ProgramDetailsStep } from "./form/ProgramDetailsStep";
import { ConfirmationStep } from "./form/ConfirmationStep";
import { FormNavigation } from "./form/FormNavigation";
import { useFormContext } from "./form/FormContext";

const FormStepContent = () => {
  const { formStep } = useFormContext();
  
  return (
    <>
      {formStep === 1 && <PersonalInfoStep />}
      {formStep === 2 && <ProgramDetailsStep />}
      {formStep === 3 && <ConfirmationStep />}
    </>
  );
};

export const ApplicationForm = () => {
  return (
    <FormProvider>
      <Card className="bg-secondary/5 border-secondary/20">
        <CardHeader>
          <CardTitle className="font-playfair text-2xl">Start Your Application</CardTitle>
          <CardDescription>
            Take the first step toward your international hospitality career
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormStepContent />
        </CardContent>
        <CardFooter>
          <FormNavigation />
        </CardFooter>
      </Card>
    </FormProvider>
  );
};
