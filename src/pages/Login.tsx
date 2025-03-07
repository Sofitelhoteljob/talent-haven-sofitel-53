
import { LoginForm } from "@/components/auth/LoginForm";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | Sofitel Frankfurt Opera</title>
        <meta name="description" content="Sign in to your Sofitel Frankfurt Opera account" />
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
