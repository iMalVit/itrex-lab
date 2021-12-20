import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PATH from './routes';

import {
  SignUp,
  SignIn,
  RestorePassword,
  RestorePasswordSuccessed,
} from '../pages/Authorization';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { CabinetUserMakeAppointment } from '../pages/Cabinet/CabinetUserMakeAppointment';
import PrivateRoute from './PrivateRoute';
import { useAppSelector } from '../hooks';
import Cabinet from '../pages/Cabinet/Cabinet';
import { selectLoginIsLogged } from '../store/slices';
import { ResolutionsForDoctor } from '../pages/Cabinet/ResolutionsForDoctor/ResolutionsForDoctor';

const AppRoutes = () => {
  const isAuth = useAppSelector(selectLoginIsLogged);

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

      <PrivateRoute
        isAuth={isAuth}
        path={PATH.RESOLUTIONS_FOR_DOCTOR}
        component={ResolutionsForDoctor}
        redirectPath={PATH.CABINET}
      />

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
