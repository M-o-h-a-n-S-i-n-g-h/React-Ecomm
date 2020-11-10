import React from "react";
import SignIn from "../../components/SignIn/Signin.component";
import SignUp from "../../components/Sign-Up/SignUp.component";
import "./Signin-and-SignUp.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className="signinsignup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
