import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ROLES } from 'common/constants';
import { Header, Footer, Button } from '../../../components';
import { Content, Board, BoardTitle } from '../common/common.style';
import { ButtonsWrapper } from '../CabinetUser/CabinetUser.style';
import {
  ResolutionsTable,
  ResolutionsTableHeader,
  ResolutionsTableHeaderCell,
} from './ResolutionsForPatient.style';
import ResolutionRow from './components/ResolutionRow/ResolutionRow';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  selectProfileData,
  selectResolutionsArray,
} from '../../../store/slices';
import PATH from '../../../routes/routes';
import { resolutions } from '../../../store/actions';
import dictionary from '../../../common/dictionary';

export const ResolutionsForPatient = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resolutions.pending({ role_name: ROLES[0], offset: 0, limit: 100 }));
  }, []);
  const profileData = useAppSelector(selectProfileData);

  const resolutionsArray = useAppSelector(selectResolutionsArray);

  return (
    <Content>
      <Header userInfo={profileData} />
      <Board>
        <ButtonsWrapper>
          <Button variant="secondary" size="small">
            {dictionary.cabinetPatientPage.buttonProfile}
          </Button>
          <Link to={PATH.CABINET}>
            <Button variant="secondary" size="small">
              {dictionary.cabinetPatientPage.buttonAppointments}
            </Button>
          </Link>
          <Button variant="primary" size="small">
            {dictionary.cabinetDoctorPage.buttonResolutions}
          </Button>
        </ButtonsWrapper>
        <BoardTitle>{dictionary.cabinetDoctorPage.resolutionsTitle}</BoardTitle>
        <ResolutionsTable>
          <thead>
            <ResolutionsTableHeader>
              {Object.entries(dictionary.resolutionColumns).map(
                ([key, value]) => (
                  <ResolutionsTableHeaderCell key={key}>
                    {value}
                  </ResolutionsTableHeaderCell>
                ),
              )}
            </ResolutionsTableHeader>
          </thead>
          <tbody>
            {resolutionsArray.map((resolution: any) => (
              <ResolutionRow
                key={resolution.id}
                firstName={resolution.doctor.first_name}
                lastName={resolution.doctor.last_name}
                resolution={resolution.resolution}
                visitDate={format(new Date(resolution.visit_date), 'MM/dd/yy')}
                nextAppointmentDate={format(
                  new Date(resolution.next_appointment_date),
                  'MM/dd/yy',
                )}
              />
            ))}
          </tbody>
        </ResolutionsTable>
      </Board>
      <Footer />
    </Content>
  );
};
