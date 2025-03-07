
import { SignupForm } from "@/components/auth/SignupForm";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | Sofitel Frankfurt Opera</title>
        <meta name="description" content="Create an account with Sofitel Frankfurt Opera" />
      </Helmet>
      <SignupForm />
    </>
  );
};

export default Signup;
