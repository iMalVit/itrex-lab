import * as Yup from "yup";
import { validation } from "../../../../utils/validation.util";

export const RestorePasswordFormValidationsSchema = Yup.object().shape({
  email: Yup.string()
    .matches(validation.email, "Email is not valid")
    .required("Email is required"),
});
