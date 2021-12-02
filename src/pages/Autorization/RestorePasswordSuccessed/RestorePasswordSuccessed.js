import React from "react";
import {
  Content,
  Form,
  FormLabel,
  FormDescription,
  FormTitle,
  BackLink,
  EnteredEmail,
} from "./RestorePasswordSuccessed.style";
import { BackgroundWrapper } from "../common/common.style";

import { PATH } from "../../../routes/routes";

const RestorePasswordSuccessed = () => {
  return (
    <BackgroundWrapper page="RestorePassword">
      <Content>
        <Form>
          <FormLabel>
            <BackLink to={PATH.SIGN_IN}>
              <img src="/assets/icons/angle-left-b.svg" alt="arrow" />
            </BackLink>

            <FormTitle htmlFor="form">Restore Password</FormTitle>
          </FormLabel>

          <FormDescription>
            An email has been sent to{" "}
            <EnteredEmail href={`mailto: test@test.com`}>
              test@test.com.
            </EnteredEmail>{" "}
            Check your inbox, and click the reset link provided.
          </FormDescription>
        </Form>
      </Content>
      //{" "}
    </BackgroundWrapper>
  );
};

export default RestorePasswordSuccessed;
