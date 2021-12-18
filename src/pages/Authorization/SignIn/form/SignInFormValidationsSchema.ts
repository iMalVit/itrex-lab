import * as Yup from 'yup';
import dictionary from '../../../../common/dictionary';
import validation from '../../../../utils/validation.util';

const SignInFormValidationsSchema = Yup.object().shape({
  userName: Yup.string()
    .matches(validation.email, dictionary.validation.emailValidation)
    .required(dictionary.validation.emailRequired),
  password: Yup.string()
    .required(dictionary.validation.passwordRequired)
    .matches(validation.password, dictionary.validation.passwordValidation),
});

export default SignInFormValidationsSchema;
