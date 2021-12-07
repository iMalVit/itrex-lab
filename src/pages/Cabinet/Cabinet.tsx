import React from "react";
import CabinetUser from "./CabinetUser/CabinetUser";
import CabinetDoctor from "./CabinetDoctor/CabinetDoctor"
import { useAppSelector } from "../../hooks";
import { Content } from "./common/common.style";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Cabinet = (props: any) => {

  const userInfo = useAppSelector(state => state.profile)

  return (
    <Content>
       <Header userInfo={userInfo}></Header>
       {userInfo.role_name === 'Patient' && <CabinetUser />}
       {userInfo.role_name === 'Doctor' &&  <CabinetDoctor/>}
       <Footer></Footer>
    </Content>
  )
};

export default Cabinet;