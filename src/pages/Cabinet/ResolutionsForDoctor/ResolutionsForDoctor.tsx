import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Content, Board, BoardTitle } from '../common/common.style';
import ButtonsWrapper from '../CabinetDoctor/CabinetDoctor.style';
import Button from '../../../components/Button/Button.style';
import { ResolutionsTable, ResolutionsTableHeader, ResolutionsTableHeaderCell } from './ResolutionsForDoctor.style';
import ResolutionRow from './components/ResolutionRow/ResolutionRow';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectProfileData } from '../../../store/slices/profile.slice';
import PATH from '../../../routes/routes';
import resolutions from '../../../store/actions/resolutions.actions';
import { selectResolutionsArray } from '../../../store/slices/resolutions.slice';
import dictionary from '../../../common/dictionary';

const ResolutionsForDoctor = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resolutions.pending({ offset: 0, limit: 100 }));
  }, []);
  const profileData = useAppSelector(selectProfileData);

  const resolutionsArray = useAppSelector(selectResolutionsArray);

  return (
    <Content>
      <Header userInfo={profileData} />
      <Board>
        <ButtonsWrapper>
          <Link to={PATH.CABINET}>
            <Button variant="secondary" size="small">
              {dictionary.cabinetDoctorPage.buttonPatients}
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
              {Object.entries(dictionary.resolutionColumns)
                .map(([key, value]) => <ResolutionsTableHeaderCell key={key}>{value}</ResolutionsTableHeaderCell>)}
            </ResolutionsTableHeader>
          </thead>
          <tbody>
            {resolutionsArray.map((resolution: any) => (
              <ResolutionRow
                key={resolution.id}
                firstName={resolution.patient.first_name}
                lastName={resolution.patient.last_name}
                resolution={resolution.resolution}
                visitDate={format(new Date(resolution.visit_date), 'MM/dd/yy')}
                nextAppointmentDate={format(new Date(resolution.next_appointment_date), 'MM/dd/yy')}
              />
            ))}
          </tbody>
        </ResolutionsTable>
      </Board>
      <Footer />
    </Content>
  );
};

export default ResolutionsForDoctor;
