import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { RestorePasswordFormValidationsSchema } from "./RestorePasswordFormValidationsSchema";
import { PATH } from "../../../../routes/routes";
import {
  FormButtonWrapper,
  InputErrorText,
  FormInput,
  FormInputWrapperEmail,
} from "../../common/common.style";
import {
  BackLink,
  FormLabel,
  FormTitle,
  FormDescription,
  Form,
} from "../RestorePassword.style";
import { Button } from "../../../../components/Button/Button.style";

const RestorePasswordForm = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validateOnBlur
      onSubmit={(values) => {

        history.push(PATH.RESTORE_PASSWORD_SUCCESSED);
      }}
      validationSchema={RestorePasswordFormValidationsSchema}
    >
      {({ values, errors, touched, handleSubmit, dirty, isValid }) => (
        <Form>
          <FormLabel>
            <BackLink to={PATH.SIGN_IN}>
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
              variant="primary"
              width="214px"
              size="medium"
              iconRight="arrow"
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
