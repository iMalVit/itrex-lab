import React from 'react';
import CabinetUser from './CabinetUser/CabinetUser';
import CabinetDoctor from './CabinetDoctor/CabinetDoctor';
import { useAppSelector } from '../../hooks';
import { Content } from './common/common.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { selectProfileData } from '../../store/slices/profile.slice';
import { ROLES } from '../../common/constants';

const Cabinet = () => {
  const profileData = useAppSelector(selectProfileData);

  return (
    <Content>
      <Header userInfo={profileData} />
      {profileData.role_name === ROLES[0] && <CabinetUser />}
      {profileData.role_name === ROLES[1] && <CabinetDoctor />}
      <Footer />
    </Content>
  );
};

export default Cabinet;
