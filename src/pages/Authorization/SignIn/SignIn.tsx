import React from 'react';
import SignInForm from './form/SignInForm';
import {
  BackgroundWrapper,
  QuestionLinkWrapper,
  QuestionLinkText,
  QuestionLink,
} from '../common/common.style';
import { Content } from './SignIn.style';
import dictionary from '../../../common/dictionary';

const SignIn = () => (
  <BackgroundWrapper page="SignIn">
    <Content>
      <SignInForm />
      <QuestionLinkWrapper page="SignIn">
        <QuestionLinkText>{dictionary.authorizedPages.signUpQuestion}</QuestionLinkText>
        <QuestionLink to="sign_up">{dictionary.authorizedPages.signUp}</QuestionLink>
      </QuestionLinkWrapper>
    </Content>
  </BackgroundWrapper>
);

export default SignIn;
