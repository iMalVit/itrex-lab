import * as Yup from 'yup';
import validation from '../../../../utils/validation.util';

const SignUpFormValidationsSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .matches(validation.name, 'First Name is not valid'),
  lastName: Yup.string()
    .required('Last Name is required')
    .matches(validation.name, 'Last Name is not valid'),
  userName: Yup.string()
    .matches(validation.email, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      validation.password,
      'Password must contain a capital letter, a number and be at least 8 characters',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], "Passwords don't matched"),
});

export default SignUpFormValidationsSchema;
