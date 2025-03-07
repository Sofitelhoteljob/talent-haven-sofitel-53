
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignupFormFields } from "./SignupFormFields";
import { useSignupForm } from "./useSignupForm";

export const SignupForm = () => {
  const { 
    formState,
    handleInputChange,
    handleSelectChange,
    handleSignup,
    navigate
  } = useSignupForm();

  const { 
    fullName, 
    email, 
    password, 
    confirmPassword, 
    country, 
    phone, 
    preferredLanguage, 
    isLoading, 
    errors 
  } = formState;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-500 mt-2">Join Sofitel Frankfurt Opera</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Fill in your details to create an account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSignup}>
            <CardContent className="space-y-4">
              <SignupFormFields
                fullName={fullName}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                country={country}
                phone={phone}
                preferredLanguage={preferredLanguage}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
              />
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
              
              <div className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button 
                  type="button" 
                  onClick={() => navigate("/login")} 
                  className="text-primary hover:underline"
                >
                  Sign in
                </button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};
