import React from "react";
import SignUpParent from "./SignUpParent/SignUpParent";
import SignUpTeacher from "./SignUpTeacher/SignUpTeacher";

const SignUp = (props) => {
  let Register = null;

  const {
    match: { params },
  } = props;

  console.log(params);
  if (params === "teacher") {
    Register = <SignUpTeacher />;
  } else if (params === "parent") {
    Register = <SignUpParent />;
  }

  return <div>{Register}</div>;
};

export default SignUp;
