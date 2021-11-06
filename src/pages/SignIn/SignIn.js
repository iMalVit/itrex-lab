import React from "react";
import SignInForm from "./form/SignInForm";
import {
  BackgroundWrapper,
  QuestionLinkWrapper,
  QuestionLinkText,
  QuestionLink,
} from "../common/styles/common.style";
import { Content } from "./SignIn.style";

const SignIn = () => {
  return (
    <BackgroundWrapper page="SignIn">
      <Content>
        <SignInForm />
        <QuestionLinkWrapper page="SignIn">
          <QuestionLinkText>Don't have an account?</QuestionLinkText>
          <QuestionLink to="sign_up">Sign up</QuestionLink>
        </QuestionLinkWrapper>
      </Content>
    </BackgroundWrapper>
  );
};

export default SignIn;
