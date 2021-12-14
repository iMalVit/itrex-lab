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
import Button from '../../../../components/Button/Button.style';
import { InputErrorText } from '../../common/common.style';

import TimeBoard from '../components/TimeBoard/TimeBoard';
import useCreateAppointment from '../../../../store/hooks/useCreateAppointment';
import CalendarFormik from '../components/CalendarFormik/CalendarFormik';
import SpecializationsSelect from '../components/SpecializationsSelect/SpecializationsSelect';
import DoctorsSelect from '../components/DoctorsSelect/DoctorsSelect';

const CabinetUserMakeAppointmentForm = () => {
  const { makeAppointment } = useCreateAppointment();

  const convertTime = (time: any) => {
    const convertedTime = time.slice(0, -8);
    const afterNumber = time.slice(6, 8);

    if (convertedTime === '12') return `${convertedTime}`;
    if (afterNumber === ' A' && convertedTime < 12) return `${convertedTime}`;
    if (afterNumber === 'AM' && convertedTime < 12) return `0${convertedTime}`;
    if (afterNumber === 'PM' && convertedTime < 12) return `${Number(convertedTime) + 12}`;
  };

  const convertDate = (day: any) => {
    if (day.toString().length === 1) {
      return 0 + day.toString();
    } return day;
  };

  return (
    <Formik
      initialValues={{
        date: new Date(),
        time: '',
        occupation: '',
        doctorName: '',
        reason: '',
        note: '',
      }}
      validationSchema={CabinetUserMakeAppointmentFormValidationSchema}
      validateOnBlur={false}
      onSubmit={(values) => {
        const {
          doctorName: doctorID, reason, note, date, time,
        } = values;
        const appointmentData = {
          date: `${date.getFullYear()}-${date.getMonth() + 1}-${convertDate(
            date.getDate(),
          )}T${convertTime(time)}:00:00.000Z`,
          doctorID,
          reason,
          note,
        };

        makeAppointment(appointmentData);
      }}
    >
      {({
        values, errors, touched, handleSubmit, setFieldValue, isValid, dirty,
      }) => (
        <MakeAppointmentForm onSubmit={handleSubmit}>
          <ChooseAdditionalInfo>
            <StepInfo>
              <StepIcon src="/assets/icons/1.svg" />
              <StepText>
                Select a doctor and define the reason of your visit
              </StepText>
            </StepInfo>
            <SelectWrapper>
              <InputLabel>Occupation</InputLabel>
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
              <InputLabel>Doctors name</InputLabel>
              <Field component={DoctorsSelect} name="doctorName" id="doctorName" />
              {errors.doctorName && touched.doctorName ? (
                <InputErrorText type="text">{errors.doctorName}</InputErrorText>
              ) : null}
            </SelectWrapper>

            <SelectWrapper>
              <InputLabel>Reason for the visit</InputLabel>
              <Input placeholder="Reason for visit" name="reason" id="reason" />
              {errors.reason && touched.reason ? (
                <InputErrorText type="text">{errors.reason}</InputErrorText>
              ) : null}
            </SelectWrapper>

            <SelectWrapper>
              <InputLabel>Note</InputLabel>
              <Input
                placeholder="Leave a note if needed"
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
              <StepText>Choose a day for an appointment</StepText>
            </StepInfo>
            {values.doctorName && values.occupation ? (
              <Field name="date" id="date" component={CalendarFormik} />
            ) : (
              <ChooseADayError>Choose a doctor first</ChooseADayError>
            )}
          </ChooseDay>

          <ChooseTime>
            <StepInfo>
              <StepIcon src="/assets/icons/3.svg" />
              <StepText>Select an available timeslot</StepText>
            </StepInfo>
            {values.doctorName && values.occupation && values.date ? (
              <ChooseTimeContainer>
                <Field name="time" id="time" component={TimeBoard} />
              </ChooseTimeContainer>
            ) : (
              <ChooseTimeError>
                Choose a doctor and a date first
              </ChooseTimeError>
            )}

            <ButtonWrapper>
              <Button
                variant="primary"
                size="medium"
                type="submit"
                width="160px"
                onClick={handleSubmit}
                disabled={!isValid && dirty}
              >
                Submit
              </Button>
            </ButtonWrapper>
          </ChooseTime>
        </MakeAppointmentForm>
      )}
    </Formik>
  );
};

export default CabinetUserMakeAppointmentForm;
