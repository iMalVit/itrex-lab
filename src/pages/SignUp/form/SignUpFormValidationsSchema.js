import * as Yup from "yup";
export const SignUpFormValidationsSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      "First Name is not valid"
    ),
  lastName: Yup.string()
    .required("Last Name is required")
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      "Last Name is not valid"
    ),
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
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords don't matched"),
});
