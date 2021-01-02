import React from "react";
import SignUp from "../../components/SignUp";

const SignUpContainer = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("hii");
  };

  return <SignUp handleSubmit={handleSubmit} />;
};

export default SignUpContainer;
