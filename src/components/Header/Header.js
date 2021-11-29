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

const Header = ({ userInfo }) => {
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
