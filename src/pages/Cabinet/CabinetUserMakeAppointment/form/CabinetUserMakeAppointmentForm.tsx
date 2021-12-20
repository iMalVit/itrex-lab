import React from 'react';
import { Formik, Field } from 'formik';
import CabinetUserMakeAppointmentFormValidationSchema from './CabinetUserMakeAppointmentFormValidationSchema';
import {
  MakeAppointmentForm,
  ChooseDay,
  ChooseTime,
  StepInfo,
  StepIcon,
  StepText,
  ChooseAdditionalInfo,
  SelectWrapper,
  InputLabel,
  Input,
  ChooseTimeContainer,
  ChooseADayError,
  ChooseTimeError,
  ButtonWrapper,
} from '../CabinetUserMakeAppointment.style';
import { Button } from '../../../../components';
import { InputErrorText } from '../../common/common.style';

import TimeBoard from '../components/TimeBoard/TimeBoard';
import useCreateAppointment from '../../../../store/hooks/useAppointment';
import CalendarFormik from '../components/CalendarFormik/CalendarFormik';
import SpecializationsSelect from '../components/SpecializationsSelect/SpecializationsSelect';
import DoctorsSelect from '../components/DoctorsSelect/DoctorsSelect';
import dictionary from '../../../../common/dictionary';
import { dateMakeAppointment } from '../../../../utils/convertTime.util';

const CabinetUserMakeAppointmentForm = () => {
  const { makeAppointment } = useCreateAppointment();

  const formikInitialValues = {
    date: new Date(),
    time: '',
    occupation: '',
    doctorName: '',
    reason: '',
    note: '',
  };

  const handlerSubmit = (values: any) => {
    const {
      doctorName: doctorID, reason, note, date, time,
    } = values;
    const appointmentData = {
      date: dateMakeAppointment(date, time),
      doctorID,
      reason,
      note,
    };

    makeAppointment(appointmentData);
  };

  return (
    <Formik
      initialValues={formikInitialValues}
      validationSchema={CabinetUserMakeAppointmentFormValidationSchema}
      validateOnBlur={false}
      onSubmit={handlerSubmit}
    >
      {({
        values, errors, touched, handleSubmit, setFieldValue, isValid, dirty,
      }) => (
        <MakeAppointmentForm onSubmit={handleSubmit}>
          <ChooseAdditionalInfo>
            <StepInfo>
              <StepIcon src="/assets/icons/1.svg" />
              <StepText>
                {dictionary.cabinetPatientPage.step1Description}
              </StepText>
            </StepInfo>
            <SelectWrapper>
              <InputLabel>{dictionary.cabinetPatientPage.labelOccupatiuon}</InputLabel>
              <Field
                component={SpecializationsSelect}
                name="occupation"
                id="occupation"
                handleReset={setFieldValue}
              />
              {errors.occupation && touched.occupation ? (
                <InputErrorText type="text">{errors.occupation}</InputErrorText>
              ) : null}
            </SelectWrapper>

            <SelectWrapper>
              <InputLabel>{dictionary.cabinetPatientPage.labelDoctorsName}</InputLabel>
              <Field component={DoctorsSelect} name="doctorName" id="doctorName" handleReset={setFieldValue} />
              {errors.doctorName && touched.doctorName ? (
                <InputErrorText type="text">{errors.doctorName}</InputErrorText>
              ) : null}
            </SelectWrapper>

            <SelectWrapper>
              <InputLabel>{dictionary.cabinetPatientPage.labelReasonForVisit}</InputLabel>
              <Input placeholder={dictionary.placeholders.reasonForVisit} name="reason" id="reason" />
              {errors.reason && touched.reason ? (
                <InputErrorText type="text">{errors.reason}</InputErrorText>
              ) : null}
            </SelectWrapper>

            <SelectWrapper>
              <InputLabel>{dictionary.cabinetPatientPage.labelNote}</InputLabel>
              <Input
                placeholder={dictionary.placeholders.leaveNote}
                name="note"
                id="note"
              />
              {errors.note && touched.note ? (
                <InputErrorText>{errors.note}</InputErrorText>
              ) : null}
            </SelectWrapper>
          </ChooseAdditionalInfo>

          <ChooseDay>
            <StepInfo>
              <StepIcon src="/assets/icons/2.svg" />
              <StepText>{dictionary.cabinetPatientPage.step2Description}</StepText>
            </StepInfo>
            {values.doctorName && values.occupation ? (
              <Field name="date" id="date" component={CalendarFormik} />
            ) : (
              <ChooseADayError>{dictionary.cabinetPatientPage.chooseDayError}</ChooseADayError>
            )}
          </ChooseDay>

          <ChooseTime>
            <StepInfo>
              <StepIcon src="/assets/icons/3.svg" />
              <StepText>{dictionary.cabinetPatientPage.step3Description}</StepText>
            </StepInfo>
            {values.doctorName && values.occupation && values.date ? (
              <ChooseTimeContainer>
                <Field name="time" id="time" component={TimeBoard} />
              </ChooseTimeContainer>
            ) : (
              <ChooseTimeError>
                {dictionary.cabinetPatientPage.chooseTimeError}
              </ChooseTimeError>
            )}

            <ButtonWrapper>
              <Button
                variant="primary"
                size="medium-submit"
                type="submit"
                onClick={handleSubmit}
                disabled={!isValid && dirty}
              >
                {dictionary.cabinetPatientPage.buttonSubmit}
              </Button>
            </ButtonWrapper>
          </ChooseTime>
        </MakeAppointmentForm>
      )}
    </Formik>
  );
};

export default CabinetUserMakeAppointmentForm;
