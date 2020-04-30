import React from "react";
import SignUpParent from "./SignUpParent/SignUpParent";
import SignUpTeacher from "./SignUpTeacher/SignUpTeacher";

const SignUp = ({ params }) => {
  let Register = null;

  if (params === "teacher") {
    Register = <SignUpTeacher />;
  } else if (params === "parent") {
    Register = <SignUpParent />;
  }

  return <div></div>;
};

export default SignUp;
