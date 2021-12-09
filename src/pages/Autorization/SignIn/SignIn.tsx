import React from 'react';
import SignInForm from './form/SignInForm';
import {
  BackgroundWrapper,
  QuestionLinkWrapper,
  QuestionLinkText,
  QuestionLink,
} from '../common/common.style';
import { Content } from './SignIn.style';

const SignIn = () => (
  <BackgroundWrapper page="SignIn">
    <Content>
      <SignInForm />
      <QuestionLinkWrapper page="SignIn">
        <QuestionLinkText>Don&apos;t have an account?</QuestionLinkText>
        <QuestionLink to="sign_up">Sign up</QuestionLink>
      </QuestionLinkWrapper>
    </Content>
  </BackgroundWrapper>
);

export default SignIn;
