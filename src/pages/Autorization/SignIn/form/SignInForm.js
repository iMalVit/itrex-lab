import React, { useState } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { login, getUserProfile } from "../../../../api/api.util";
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
import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/userSlice";

const SignInForm = () => {
  const history = useHistory();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();

  const goToCabinet = (profileData) => {
    // eslint-disable-next-line default-case
    switch (profileData.data.role_name) {
      case "Doctor":
        history.push(PATH.CABINET_DOCTOR);
        break;
      case "Patient":
        history.push(PATH.CABINET_USER);
        break;
    }
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
        login(values)
          .then((res) => {
            console.log(res.data.access_token);
            return res;
          })
          .then(
            (res) =>
              sessionStorage.setItem("access_token", res.data.access_token)
            // console.log(res)
          )
          .then(() => getUserProfile(sessionStorage.getItem("access_token")))
          .then((res) => {
            dispatch(userActions.setCurrentUser(res.data));
            goToCabinet(res);
            console.log(res);
          });
        // history.push(PATH.CABINET_USER);
      }}
      validationSchema={SignInFormValidationsSchema}
    >
      {({ values, errors, touched, handleSubmit, dirty, isValid }) => (
        <Form>
          <FormTitle>Sign In</FormTitle>

          <FormInputWrapperEmail>
            <FormInput
              placeholder={"Email"}
              isvalid={touched.userName && errors.userName}
              name={"userName"}
              type={"text"}
            />
            {touched.userName && errors.userName && (
              <InputErrorText>{errors.userName}</InputErrorText>
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
