/**
 * Internal dependencies.
 */
import LoginForm from "../../components/Login";
import SignupForm from "../../components/Signup";

interface LoginAndSignupPageProp {
  type: "login" | "signup";
}

const LoginAndSignupPage = ({ type }: LoginAndSignupPageProp) => {
  return <>{type === "login" ? <LoginForm /> : <SignupForm />}</>;
};

export default LoginAndSignupPage;
