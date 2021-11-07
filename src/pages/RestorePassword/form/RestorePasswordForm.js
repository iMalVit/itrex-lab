import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { RestorePasswordFormValidationsSchema } from "./RestorePasswordFormValidationsSchema";
import {
  FormButtonWrapper,
  InputErrorText,
  FormInput,
  FormInputWrapperEmail,
} from "../../common/styles/common.style";
import {
  BackLink,
  FormLabel,
  FormTitle,
  FormDescription,
  Form,
} from "../RestorePassword.style";
import { Button } from "../../common/styles/button.style";

const RestorePasswordForm = (props) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
        props.onSaveEmailData(values);
        history.push("/restore_password-success");
      }}
      validationSchema={RestorePasswordFormValidationsSchema}
    >
      {({ values, errors, touched, handleSubmit, dirty, isValid }) => (
        <Form>
          <FormLabel>
            <BackLink to="sign_in">
              <img src="/assets/icons/angle-left-b.svg" alt="arrow" />
            </BackLink>

            <FormTitle htmlFor="form">Restore Password</FormTitle>
          </FormLabel>

          <FormDescription>
            Please use your email address, and we’ll send you the link to reset
            your password
          </FormDescription>

          <FormInputWrapperEmail>
            <FormInput
              placeholder={"Email"}
              isvalid={touched.email && errors.email}
              name={"email"}
              type={"text"}
            />
            {touched.email && errors.email && (
              <InputErrorText>{errors.email}</InputErrorText>
            )}
          </FormInputWrapperEmail>

          <FormButtonWrapper>
            <Button
              primary
              width="214px"
              medium
              textAlign="start"
              iconRight
              disabled={!isValid && dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Send Reset Link
            </Button>
          </FormButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
export default RestorePasswordForm;
