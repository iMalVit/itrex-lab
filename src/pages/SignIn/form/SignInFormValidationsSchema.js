import * as Yup from "yup";
export const SignInFormValidationsSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
      "Email is not valid"
    )
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/,
      "Password must contain a capital letter, a number and be at least 8 characters"
    ),
});
