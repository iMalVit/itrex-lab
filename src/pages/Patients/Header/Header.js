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
} from "./Header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <LoggedPerson>
        <LoggedPersonDescription>
          <LoggedPersonName>Miranda Nelson</LoggedPersonName>
          <LoggedPersonProfession>Doctor</LoggedPersonProfession>
        </LoggedPersonDescription>
        <img src="/assets/avatars/avatar.png" alt="logged-person__avatar" />
        <IndicatorBox>
          <Indicator></Indicator>
        </IndicatorBox>
      </LoggedPerson>
    </HeaderWrapper>
  );
};

export default Header;
