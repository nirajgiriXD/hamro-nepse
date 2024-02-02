/**
 * Internal dependencies.
 */
import { Login, Signup, ForgotPassword } from "../../components";

interface LoginAndSignupPageProp {
  type: "login" | "signup" | "forgot-password";
}

const LoginAndSignupPage = ({ type }: LoginAndSignupPageProp) => {
  return (
    <>
      {type === "forgot-password" ? (
        <ForgotPassword />
      ) : type === "login" ? (
        <Login />
      ) : (
        <Signup />
      )}
    </>
  );
};

export default LoginAndSignupPage;
