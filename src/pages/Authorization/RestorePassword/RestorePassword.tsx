import React from 'react';
import RestorePasswordForm from './form/RestorePasswordForm';
import { BackgroundWrapper } from '../common/common.style';
import { Content } from './RestorePassword.style';

export const RestorePassword = () => (
  <BackgroundWrapper page="RestorePassword">
    <Content>
      <RestorePasswordForm />
    </Content>
  </BackgroundWrapper>
);
