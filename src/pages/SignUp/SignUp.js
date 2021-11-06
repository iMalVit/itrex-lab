import React from "react";
import SignUpForm from "./form/SignUpForm";
import {
  BackgroundWrapper,
  QuestionLinkWrapper,
  QuestionLinkText,
  QuestionLink,
} from "../common/styles/common.style";
import { Content } from "./SignUp.style";

const SignUp = () => {
  return (
    <BackgroundWrapper>
      <Content>
        <SignUpForm />
        <QuestionLinkWrapper>
          <QuestionLinkText>Already have an account?</QuestionLinkText>
          <QuestionLink to="sign_in">Sign in</QuestionLink>
        </QuestionLinkWrapper>
      </Content>
    </BackgroundWrapper>
  );
};

export default SignUp;
