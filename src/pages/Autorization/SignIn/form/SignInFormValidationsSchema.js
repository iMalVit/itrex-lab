import * as Yup from "yup";
import { validation } from "../../../../utils/validation.util";

export const SignInFormValidationsSchema = Yup.object().shape({
  email: Yup.string()
    .matches(validation.email, "Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      validation.password,
      "Password must contain a capital letter, a number and be at least 8 characters"
    ),
});
