import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Content } from "../common/common.style";
import Calendar from "./components/Calendar/Calendar";
import { clinicsDoctors } from "../../../mock/clinicsDoctors";
import {
  Navigation,
  MainTitle,
  ArrowNavigationIcon,
  SubTitle,
  Board,
  PageTitle,
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
} from "./CabinetUserMakeAnAppointment.style.";
import { Button } from "../../../components/Button/Button.style";
import { SelectList } from "./components/SelectList/SelectList";
import styled from "styled-components";
import * as Yup from "yup";
import { InputErrorText } from "../common/common.style";

import { Formik, Field } from "formik";
import { useHistory } from "react-router";
import TimeBoard from "./components/TimeBoard/TimeBoard";
import { PATH } from "../../../routes/routes";

const ButtonWrapper = styled.div`
  margin-top: 400px;
  display: flex;
  justify-content: flex-end;
`;

const CabinetUserMakeAnAppointment = (props) => {
  const appointmentSchema = Yup.object().shape({
    date: Yup.string().required("This field is required!"),
    time: Yup.string().required("This field is required!"),
    doctorName: Yup.string().required("This field is required!"),
    occupation: Yup.string().required("This field is required!"),
    reason: Yup.string().required("This field is required!"),
    note: Yup.string(),
  });

  const occupations = clinicsDoctors
    .reduce((acc, { occupation }) => {
      if (!acc.includes(occupation)) {
        return [...acc, occupation];
      }
      return acc;
    }, [])
    .map((occupation) => ({
      value: occupation,
      label: occupation,
    }));

  const getFilteredDoctors = (doctorOccupation) => {
    if (doctorOccupation) {
      return clinicsDoctors
        .filter(({ occupation }) => occupation === doctorOccupation)
        .map(({ firstName, lastName, id }) => ({
          label: `${firstName} ${lastName}`,
          value: id,
        }));
    }
    return clinicsDoctors.map(({ firstName, lastName, id }) => ({
      label: `${firstName} ${lastName}`,
      value: id,
    }));
  };

  const getAvailableTimes = (doctorsId) => {
    return clinicsDoctors.find(({ id }) => id === doctorsId).availableTime;
  };

  const ConvertDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${year}`;
  };

  const history = useHistory();

  getAvailableTimes(1);
  return (
    <Content>
      <Header
        name="Larry Prinston"
        profession="Patient"
        avatar="/assets/avatars/avatarPatient.png"
      ></Header>
      <Board>
        <Navigation>
          <MainTitle>Doctors</MainTitle>
          <ArrowNavigationIcon />
          <SubTitle>Make an appointment</SubTitle>
        </Navigation>
        <PageTitle>Make an appointment</PageTitle>

        <Formik
          initialValues={{
            date: new Date(),
            time: "defaultTime",
            occupation: "",
            doctorName: "",
            reason: "",
            note: "",
          }}
          validationSchema={appointmentSchema}
          validateOnBlur={false}
          onSubmit={(values) => {
            const searchTerm = values.doctorName;

            const firstName = clinicsDoctors.find(
              (doctor) => doctor.id === searchTerm
            ).firstName;

            const lastName = clinicsDoctors.find(
              (doctor) => doctor.id === searchTerm
            ).lastName;

            const occupation = clinicsDoctors.find(
              (doctor) => doctor.id === searchTerm
            ).occupation;

            const Values = { ...values, firstName, lastName, occupation };

            props.onSaveVisitData(Values);
            history.push(PATH.CABINET_USER);
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
                    options={occupations}
                  />
                  {errors.occupation && touched.occupation ? (
                    <InputErrorText type="text">
                      {errors.occupation}
                    </InputErrorText>
                  ) : null}
                </SelectWrapper>

                <SelectWrapper>
                  <InputLabel>Doctors name</InputLabel>
                  <Field
                    component={SelectList}
                    name="doctorName"
                    id="doctorName"
                    options={getFilteredDoctors(values.occupation)}
                  />
                  {errors.doctorName && touched.doctorName ? (
                    <InputErrorText type="text">
                      {errors.doctorName}
                    </InputErrorText>
                  ) : null}
                </SelectWrapper>

                <SelectWrapper>
                  <InputLabel>Reason for the visit</InputLabel>
                  <Input
                    placeholder="Reason for visit"
                    name="reason"
                    id="reason"
                  />
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
                <Field name="date" id="date" component={Calendar} />
              </ChooseDay>

              <ChooseTime>
                <StepInfo>
                  <StepIcon src="/assets/icons/3.svg"></StepIcon>
                  <StepText>Select an available timeslot</StepText>
                </StepInfo>
                <ChooseTimeContainer>
                  <Field
                    name="time"
                    id="time"
                    component={TimeBoard}
                    doctors={
                      values.doctorName
                        ? Object.keys(
                            getAvailableTimes(values.doctorName)["day"]
                          )
                        : null
                    }
                  ></Field>
                </ChooseTimeContainer>
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
      </Board>
      <Footer />
    </Content>
  );
};

export default CabinetUserMakeAnAppointment;
