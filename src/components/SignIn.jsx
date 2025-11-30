import AuthForm from "./AuthForm";

const SignIn = ({ setIsAuth }) => {
  return <AuthForm isSignUp={false} setIsAuth={setIsAuth} />;
};

export default SignIn;
