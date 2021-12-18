import React from 'react';
import SignUpForm from './form/SignUpForm';
import PATH from '../../../routes/routes';
import {
  BackgroundWrapper,
  QuestionLinkWrapper,
  QuestionLinkText,
  QuestionLink,
} from '../common/common.style';
import { Content } from './SignUp.style';
import dictionary from '../../../common/dictionary';

const SignUp = () => (
  <BackgroundWrapper>
    <Content>
      <SignUpForm />
      <QuestionLinkWrapper>
        <QuestionLinkText>{dictionary.authorizedPages.signInQuestion}</QuestionLinkText>
        <QuestionLink to={PATH.SIGN_IN}>{dictionary.authorizedPages.signIn}</QuestionLink>
      </QuestionLinkWrapper>
    </Content>
  </BackgroundWrapper>
);

export default SignUp;
