import React from 'react';
import CabinetUser from './CabinetUser/CabinetUser';
import CabinetDoctor from './CabinetDoctor/CabinetDoctor';
import { useAppSelector } from '../../hooks';
import { Content } from './common/common.style';
import { Header, Footer } from '../../components';
import { selectProfileData } from '../../store/slices';
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
