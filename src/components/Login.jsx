import AuthForm from "./AuthForm";

const Login = ({ setIsAuth }) => {
  return <AuthForm isRegister={false} setIsAuth={setIsAuth} />;
};

export default Login;
