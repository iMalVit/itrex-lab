import * as Yup from 'yup';
import dictionary from '../../../../common/dictionary';
import validation from '../../../../utils/validation.util';

const SignUpFormValidationsSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(dictionary.validation.firstNameRequired)
    .matches(validation.name, dictionary.validation.firstNameValidation),
  lastName: Yup.string()
    .required(dictionary.validation.lastNameRequired)
    .matches(validation.name, dictionary.validation.lastNameValidation),
  userName: Yup.string()
    .matches(validation.email, dictionary.validation.emailValidation)
    .required(dictionary.validation.emailRequired),
  password: Yup.string()
    .required(dictionary.validation.passwordRequired)
    .matches(validation.password, dictionary.validation.passwordValidation),
  confirmPassword: Yup.string()
    .required(dictionary.validation.confirmPasswordRequired)
    .oneOf([Yup.ref('password')], dictionary.validation.confirmPasswordValidation),
});

export default SignUpFormValidationsSchema;
