import React from "react";
import HeaderLogo from "./HeaderLogo";
import {
  HeaderWrapper,
  IndicatorBox,
  Indicator,
  LoggedPerson,
  LoggedPersonDescription,
  LoggedPersonName,
  LoggedPersonProfession,
  UserLogo,
} from "./Header.style";

import { useSelector } from "react-redux";

const Header = (props) => {
  const userInfo = useSelector((state) => state.user);
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <LoggedPerson>
        <LoggedPersonDescription>
          <LoggedPersonName>
            {userInfo.first_name} {userInfo.last_name}
          </LoggedPersonName>
          <LoggedPersonProfession>{userInfo.role_name}</LoggedPersonProfession>
        </LoggedPersonDescription>
        <UserLogo src={userInfo.photo} alt="avatar" />
        <IndicatorBox>
          <Indicator></Indicator>
        </IndicatorBox>
      </LoggedPerson>
    </HeaderWrapper>
  );
};

export default Header;
