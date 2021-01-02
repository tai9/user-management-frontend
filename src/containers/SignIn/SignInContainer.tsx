import React from "react";
import SignIn from "../../components/SignIn";

const SignInContainer = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("hii");
  };

  return <SignIn handleSubmit={handleSubmit} />;
};

export default SignInContainer;
