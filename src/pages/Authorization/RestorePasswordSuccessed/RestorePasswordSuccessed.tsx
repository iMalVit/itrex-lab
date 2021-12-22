import React from 'react';
import {
  Content,
  Form,
  FormLabel,
  FormDescription,
  FormTitle,
  BackLink,
  EnteredEmail,
} from './RestorePasswordSuccessed.style';
import { BackgroundWrapper } from '../common/common.style';

import PATH from '../../../routes/routes';
import dictionary from '../../../common/dictionary';

export const RestorePasswordSuccessed = () => (
  <BackgroundWrapper page="RestorePassword">
    <Content>
      <Form>
        <FormLabel>
          <BackLink to={PATH.SIGN_IN}>
            <img src="/assets/icons/angle-left-b.svg" alt="arrow" />
          </BackLink>

          <FormTitle htmlFor="form">{dictionary.authorizedPages.restoreTitle}</FormTitle>
        </FormLabel>

        <FormDescription>
          {dictionary.authorizedPages.sendEmailMessage}
          {' '}
          <EnteredEmail href="mailto: test@test.com">
            {dictionary.authorizedPages.testEmail}
          </EnteredEmail>
          {' '}
          {dictionary.authorizedPages.checkEmailMessage}
        </FormDescription>
      </Form>
    </Content>
  </BackgroundWrapper>
);
