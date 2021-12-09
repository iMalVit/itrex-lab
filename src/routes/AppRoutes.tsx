import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PATH from './routes';

import SignUp from '../pages/Autorization/SignUp/SignUp';
import SignIn from '../pages/Autorization/SignIn/SignIn';
import RestorePassword from '../pages/Autorization/RestorePassword/RestorePassword';
import RestorePasswordSuccessed from '../pages/Autorization/RestorePasswordSuccessed/RestorePasswordSuccessed';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import CabinetUserMakeAppointment from '../pages/Cabinet/CabinetUserMakeAppointment/CabinetUserMakeAppointment';
import PrivateRoute from './PrivateRoute';
import { useAppSelector } from '../hooks';
import Cabinet from '../pages/Cabinet/Cabinet';

const AppRoutes = () => {
  const isAuth = useAppSelector((state) => state.login.isLogged);

  return (
    <Switch>
      <PrivateRoute
        path={PATH.ROOT}
        exact
        component={SignUp}
        isAuth={!isAuth}
        redirectPath={PATH.CABINET}
      />

      <PrivateRoute
        isAuth={!isAuth}
        path={PATH.SIGN_UP}
        component={SignUp}
        redirectPath={PATH.CABINET}
      />

      <PrivateRoute
        isAuth={!isAuth}
        path={PATH.SIGN_IN}
        component={SignIn}
        redirectPath={PATH.CABINET}
      />

      <PrivateRoute
        path={PATH.RESTORE_PASSWORD}
        isAuth={!isAuth}
        component={RestorePassword}
        redirectPath={PATH.CABINET}
      />

      <PrivateRoute
        isAuth={!isAuth}
        path={PATH.RESTORE_PASSWORD_SUCCESSED}
        component={RestorePasswordSuccessed}
        redirectPath={PATH.CABINET}
      />

      <PrivateRoute
        path={PATH.CABINET}
        component={Cabinet}
        isAuth={isAuth}
        redirectPath={PATH.SIGN_IN}
      />

      <PrivateRoute
        isAuth={isAuth}
        path={PATH.CABINET_USER_MAKE_AN_APPOINTMENT}
        component={CabinetUserMakeAppointment}
        redirectPath={PATH.CABINET}
      />

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
