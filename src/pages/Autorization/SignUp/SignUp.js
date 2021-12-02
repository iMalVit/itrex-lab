import React from "react";
import SignUpForm from "./form/SignUpForm";
import { PATH } from "../../../routes/routes";
import {
  BackgroundWrapper,
  QuestionLinkWrapper,
  QuestionLinkText,
  QuestionLink,
} from "../common/common.style";
import { Content } from "./SignUp.style";

const SignUp = () => {
  return (
    <BackgroundWrapper>
      <Content>
        <SignUpForm />
        <QuestionLinkWrapper>
          <QuestionLinkText>Already have an account?</QuestionLinkText>
          <QuestionLink to={PATH.SIGN_IN}>Sign in</QuestionLink>
        </QuestionLinkWrapper>
      </Content>
    </BackgroundWrapper>
  );
};

export default SignUp;
