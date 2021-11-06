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
  FormButtonSubmit,
  Form,
} from "../RestorePassword.style";

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
            <FormButtonSubmit
              disabled={!isValid && dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Send Reset Link
            </FormButtonSubmit>
          </FormButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
export default RestorePasswordForm;
