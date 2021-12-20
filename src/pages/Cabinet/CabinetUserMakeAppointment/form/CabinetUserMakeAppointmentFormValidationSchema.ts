import * as Yup from 'yup';
import dictionary from '../../../../common/dictionary';

const CabinetUserMakeAppointmentFormValidationSchema = Yup.object().shape({
  date: Yup.string().required(dictionary.validation.commonRequired),
  time: Yup.string().required(dictionary.validation.commonRequired),
  doctorName: Yup.string().required(dictionary.validation.commonRequired),
  occupation: Yup.string().required(dictionary.validation.commonRequired),
  reason: Yup.string()
    .required(dictionary.validation.commonRequired)
    .min(2, 'Must not be shorter than 2 symbols'),
  note: Yup.string(),
});

export default CabinetUserMakeAppointmentFormValidationSchema;
