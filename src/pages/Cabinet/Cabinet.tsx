import React from 'react';
import CabinetUser from './CabinetUser/CabinetUser';
import CabinetDoctor from './CabinetDoctor/CabinetDoctor';
import { useAppSelector } from '../../hooks';
import { Content } from './common/common.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { selectProfileData } from '../../store/slices/profile.slice';

const Cabinet = () => {
  const profileData = useAppSelector(selectProfileData);

  return (
    <Content>
      <Header userInfo={profileData} />
      {profileData.role_name === 'Patient' && <CabinetUser />}
      {profileData.role_name === 'Doctor' && <CabinetDoctor />}
      <Footer />
    </Content>
  );
};

export default Cabinet;
