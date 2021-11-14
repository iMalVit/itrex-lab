import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { PATH } from "./routes";
import { doctors } from "../mock/doctors";

import SignUp from "../pages/Autorization/SignUp/SignUp";
import SignIn from "../pages/Autorization/SignIn/SignIn";
import RestorePassword from "../pages/Autorization/RestorePassword/RestorePassword";
import RestorePasswordSuccessed from "../pages/Autorization/RestorePasswordSuccessed/RestorePasswordSuccessed";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CabinetDoctor from "../pages/Cabinet/CabinetDoctor/CabinetDoctor";
import CabinetDoctorEmpty from "../pages/Cabinet/CabinetDoctorEmpty/CabinetDoctorEmpty";
import CabinetUser from "../pages/Cabinet/CabinetUser/CabinetUser";
import CabinetUserMakeAnAppointment from "../pages/Cabinet/CabinetUserMakeAnAppointment/CabinetUserMakeAnAppointment";

const AppRoutes = () => {
  const [emailRestore, SetEmailRestore] = useState("");

  const [doctorsVisits, SetDoctorsVisits] = useState(doctors);

  const saveEmailDataHandler = (enteredEmailData) => {
    SetEmailRestore(enteredEmailData.email);
    console.log(emailRestore);
  };

  const saveVisitDataHandler = (enteredVisitData) => {
    const visit = {
      avatar: "http://placeimg.com/640/480/transport",
      occupation: enteredVisitData.occupation,
      firstName: enteredVisitData.firstName,
      lastName: enteredVisitData.lastName,
      description: enteredVisitData.reason,
      date: enteredVisitData.date.toString(),
      time: enteredVisitData.time.slice(0, -6),
      id: doctorsVisits.length + 1,
    };

    SetDoctorsVisits((prev) => [...prev, visit]);
  };

  return (
    <Switch>
      <Route path={PATH.SIGN_UP}>
        <SignUp />
      </Route>

      <Route path={PATH.SIGN_IN}>
        <SignIn />
      </Route>

      <Route path={PATH.RESTORE_PASSWORD}>
        <RestorePassword onSaveEmailData={saveEmailDataHandler} />
      </Route>

      <Route path={PATH.RESTORE_PASSWORD_SUCCESSED}>
        <RestorePasswordSuccessed email={emailRestore} />
      </Route>

      <Route path={PATH.CABINET_DOCTOR}>
        <CabinetDoctor />
      </Route>

      <Route path={PATH.CABINET_DOCTOR_EMPTY}>
        <CabinetDoctorEmpty />
      </Route>

      <Route path={PATH.CABINET_USER}>
        <CabinetUser doctors={doctorsVisits} />
      </Route>

      <Route path={PATH.CABINET_USER_MAKE_AN_APPOINTMENT}>
        <CabinetUserMakeAnAppointment
          onSaveVisitData={saveVisitDataHandler}
        ></CabinetUserMakeAnAppointment>
      </Route>

      <Route path={PATH.ROOT} exact>
        <SignUp />
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
