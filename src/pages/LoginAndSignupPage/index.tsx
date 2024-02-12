/**
 * Internal dependencies.
 */
import {
  Login,
  Signup,
  ForgotPassword,
  UserDataUpdate,
} from "../../components";

interface LoginAndSignupPageProp {
  type: "login" | "signup" | "forgot-password" | "update";
}

const LoginAndSignupPage = ({ type }: LoginAndSignupPageProp) => {
  return (
    <>
      {type === "forgot-password" ? (
        <ForgotPassword />
      ) : type === "login" ? (
        <Login />
      ) : type === "update" ? (
        <UserDataUpdate />
      ) : (
        <Signup />
      )}
    </>
  );
};

export default LoginAndSignupPage;
