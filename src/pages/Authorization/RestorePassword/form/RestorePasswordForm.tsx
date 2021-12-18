import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import RestorePasswordFormValidationsSchema from './RestorePasswordFormValidationsSchema';
import PATH from '../../../../routes/routes';
import {
  FormButtonWrapper,
  InputErrorText,
  FormInput,
  FormInputWrapperEmail,
} from '../../common/common.style';
import {
  BackLink,
  FormLabel,
  FormTitle,
  FormDescription,
  Form,
} from '../RestorePassword.style';
import Button from '../../../../components/Button/Button.style';
import dictionary from '../../../../common/dictionary';

const RestorePasswordForm = () => {
  const history = useHistory();

  const formikInitialValues = {
    email: '',
  };

  const handleSubmit = () => {
    history.push(PATH.RESTORE_PASSWORD_SUCCESSED);
  };

  return (
    <Formik
      initialValues={formikInitialValues}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={RestorePasswordFormValidationsSchema}
    >
      {({
        errors, touched, handleSubmit, dirty, isValid,
      }) => (
        <Form>
          <FormLabel>
            <BackLink to={PATH.SIGN_IN}>
              <img src="/assets/icons/angle-left-b.svg" alt="arrow" />
            </BackLink>

            <FormTitle htmlFor="form">{dictionary.authorizedPages.restoreTitle}</FormTitle>
          </FormLabel>

          <FormDescription>
            {dictionary.authorizedPages.restoreMessage}
          </FormDescription>

          <FormInputWrapperEmail>
            <FormInput
              placeholder={dictionary.placeholders.email}
              isvalid={touched.email && errors.email}
              name="email"
              type="text"
            />
            {touched.email && errors.email && (
              <InputErrorText>{errors.email}</InputErrorText>
            )}
          </FormInputWrapperEmail>

          <FormButtonWrapper>
            <Button
              variant="primary"
              width="214px"
              size="medium"
              iconRight="arrow"
              disabled={!isValid && dirty}
              onClick={handleSubmit}
              type="submit"
            >
              {dictionary.authorizedPages.resetLinkText}
            </Button>
          </FormButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
export default RestorePasswordForm;
