import React from "react";
import {
  Content,
  Form,
  FormLabel,
  FormDescription,
  FormTitle,
  BackLink,
  EnteredEmail,
} from "./RestorePasswordSuccess.style";
import { BackgroundWrapper } from "../common/styles/common.style";

const RestorePasswordSuccess = (props) => {
  return (
    <BackgroundWrapper page="RestorePassword">
      <Content>
        <Form>
          <FormLabel>
            <BackLink to="sign_in">
              <img src="/assets/icons/angle-left-b.svg" alt="arrow" />
            </BackLink>

            <FormTitle htmlFor="form">Restore Password</FormTitle>
          </FormLabel>

          <FormDescription>
            An email has been sent to{" "}
            <EnteredEmail href={`mailto: ${props.email}`}>
              {props.email}.
            </EnteredEmail>{" "}
            Check your inbox, and click the reset link provided.
          </FormDescription>
        </Form>
      </Content>
    </BackgroundWrapper>
  );
};

export default RestorePasswordSuccess;
