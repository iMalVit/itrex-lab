import React, { useState, useEffect } from "react";
import Calendar from "../components/Calendar/Calendar";
import { CabinetUserMakeAnAppointmentFormValidationSchema } from "./CabinetUserMakeAnAppointmentFormValidationSchema";
import {
  MakeAnAppointmentForm,
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
  LoadingIndicator,
} from "../CabinetUserMakeAnAppointment.style.";
import { Button } from "../../../../components/Button/Button.style";
import { SelectList } from "../components/SelectList/SelectList";
import { InputErrorText } from "../../common/common.style";

import { Formik, Field } from "formik";
import TimeBoard from "../components/TimeBoard/TimeBoard";
import { getDoctorsSpecializations } from "../../../../api/api.util";
import { useCreateAnAppointment } from "../../../../store/hooks/useCreateAnAppointment";

const CabinetUserMakeAnAppointmentForm = (props) => {
  const { createAppointment } = useCreateAnAppointment();
  const [doctorsSpecializations, setDoctorsSpecializations] = useState(null);

  const convertTime = (time) => {
    const convertedTime = time.slice(0, -8);
    const afterNumber = time.slice(6, 8);
    console.log(convertedTime);
    console.log(afterNumber);
    if (convertedTime === "12") return `${convertedTime}`;
    if (afterNumber === " A" && convertedTime < 12) return `${convertedTime}`;
    if (afterNumber === "AM" && convertedTime < 12) return `0${convertedTime}`;
    if (afterNumber === "PM" && convertedTime < 12)
      return `${Number(convertedTime) + 12}`;
  };

  const convertDate = (day) => {
    if (day.toString().length === 1) {
      return 0 + day.toString();
    } else return day;
  };

  useEffect(() => {
    getDoctorsSpecializations().then((responce) => {
      setDoctorsSpecializations(responce.data);
    });
  }, []);

  const getSpezialisationsOptions = () => {
    return doctorsSpecializations.map(({ id, specialization_name }) => ({
      value: id,
      label: specialization_name,
    }));
  };

  return doctorsSpecializations ? (
    <Formik
      initialValues={{
        date: new Date(),
        time: "",
        occupation: "",
        doctorName: "",
        reason: "",
        note: "",
      }}
      validationSchema={CabinetUserMakeAnAppointmentFormValidationSchema}
      validateOnBlur={false}
      onSubmit={(values) => {
        console.log(values);
        const { doctorName: doctorID, reason, note, date, time } = values;
        const appointmentData = {
          date: `${date.getFullYear()}-${date.getMonth() + 1}-${convertDate(
            date.getDate()
          )}T${convertTime(time)}:00:00.000Z`,
          doctorID,
          reason,
          note,
        };

        console.log(appointmentData);

        createAppointment(appointmentData);
      }}
    >
      {({ values, errors, touched, handleSubmit, isValid, dirty }) => (
        <MakeAnAppointmentForm onSubmit={handleSubmit}>
          <ChooseAdditionalInfo>
            <StepInfo>
              <StepIcon src="/assets/icons/1.svg"></StepIcon>
              <StepText>
                Select a doctor and define the reason of your visit
              </StepText>
            </StepInfo>
            <SelectWrapper>
              <InputLabel>Occupation</InputLabel>
              <Field
                component={SelectList}
                name="occupation"
                id="occupation"
                options={getSpezialisationsOptions()}
              />
              {errors.occupation && touched.occupation ? (
                <InputErrorText type="text">{errors.occupation}</InputErrorText>
              ) : null}
            </SelectWrapper>

            <SelectWrapper>
              <InputLabel>Doctors name</InputLabel>
              <Field component={SelectList} name="doctorName" id="doctorName" />
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
                <InputErrorText>{errors.notel}</InputErrorText>
              ) : null}
            </SelectWrapper>
          </ChooseAdditionalInfo>

          <ChooseDay>
            <StepInfo>
              <StepIcon src="/assets/icons/2.svg"></StepIcon>
              <StepText>Choose a day for an appointment</StepText>
            </StepInfo>
            {values.doctorName && values.occupation ? (
              <Field name="date" id="date" component={Calendar} />
            ) : (
              <ChooseADayError>Choose a doctor first</ChooseADayError>
            )}
          </ChooseDay>

          <ChooseTime>
            <StepInfo>
              <StepIcon src="/assets/icons/3.svg"></StepIcon>
              <StepText>Select an available timeslot</StepText>
            </StepInfo>
            {values.doctorName && values.occupation && values.date ? (
              <ChooseTimeContainer>
                <Field name="time" id="time" component={TimeBoard}></Field>
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
        </MakeAnAppointmentForm>
      )}
    </Formik>
  ) : (
    <LoadingIndicator>LOADING</LoadingIndicator>
  );
};

export default CabinetUserMakeAnAppointmentForm;
