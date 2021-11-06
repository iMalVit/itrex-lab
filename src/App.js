import React, { useState } from "react";
import Patients from "./pages/Patients/Patients";
import EmptyPatients from "./pages/Patients/EmptyPatients/EmptyPatients";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RestorePassword from "./pages/RestorePassword/RestorePassword";
import RestorePasswordSuccess from "./pages/RestorePasswordSuccess/RestorePasswordSuccess";
import { Route, Switch } from "react-router-dom";

function App() {
  const [emailRestore, SetEmailRestore] = useState("");
  const saveEmailDataHandler = (enteredEmailData) => {
    SetEmailRestore(enteredEmailData.email);
    console.log(emailRestore);
  };
  return (
    <React.Fragment>
      <Switch>
        <Route path="/patients">
          <Patients />
        </Route>

        <Route path="/empty_patients">
          <EmptyPatients />
        </Route>

        <Route path="/restore_password">
          <RestorePassword onSaveEmailData={saveEmailDataHandler} />
        </Route>

        <Route path="/restore_password-success">
          <RestorePasswordSuccess email={emailRestore} />
        </Route>

        <Route path="/sign_up">
          <SignUp />
        </Route>

        <Route path="/sign_in">
          <SignIn />
        </Route>

        <Route path="/" exact>
          <SignUp />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
