import * as Yup from 'yup';
import dictionary from '../../../../common/dictionary';
import validation from '../../../../utils/validation.util';

const RestorePasswordFormValidationsSchema = Yup.object().shape({
  email: Yup.string()
    .matches(validation.email, dictionary.validation.emailValidation)
    .required(dictionary.validation.emailRequired),
});

export default RestorePasswordFormValidationsSchema;
