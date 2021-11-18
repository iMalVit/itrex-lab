import React, { useState } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { SignInFormValidationsSchema } from "./SignInFormValidationsSchema";
import { PATH } from "../../../../routes/routes";
import {
  QuestionLink,
  InputErrorText,
  FormButtonWrapper,
  FormInput,
  FormInputWrapperEmail,
  FormInputWrapperPassword,
  ShowPasswordIcon,
} from "../../common/common.style";
import { Form, FormTitle, QuestionLinkForgotWrapper } from "../SignIn.style";
import { Button } from "../../../../components/Button/Button.style";

const SignInForm = () => {
  const history = useHistory();
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
        history.push(PATH.CABINET_USER);
      }}
      validationSchema={SignInFormValidationsSchema}
    >
      {({ values, errors, touched, handleSubmit, dirty, isValid }) => (
        <Form>
          <FormTitle>Sign In</FormTitle>

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

          <FormInputWrapperPassword>
            <FormInput
              isvalid={touched.password && errors.password}
              name={"password"}
              placeholder={"Password"}
              type={isShowPassword ? "text" : "password"}
              maxLength="30"
            />
            {touched.password && errors.password && (
              <InputErrorText type="password">{errors.password}</InputErrorText>
            )}
            <ShowPasswordIcon
              isShow={isShowPassword}
              onClick={() => setIsShowPassword(!isShowPassword)}
            ></ShowPasswordIcon>
          </FormInputWrapperPassword>
          <FormButtonWrapper>
            <Button
              variant="primary"
              size="medium"
              width="138px"
              iconRight="arrow"
              disabled={!isValid && dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Sign In
            </Button>
          </FormButtonWrapper>
          <QuestionLinkForgotWrapper>
            <QuestionLink to={PATH.RESTORE_PASSWORD}>
              Forgot Password?
            </QuestionLink>
          </QuestionLinkForgotWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
