import * as Yup from "yup";
export const RestorePasswordFormValidationsSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
      "Email is not valid"
    )
    .required("Email is required"),
});
