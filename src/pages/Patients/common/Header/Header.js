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

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <LoggedPerson>
        <LoggedPersonDescription>
          <LoggedPersonName>{props.name}</LoggedPersonName>
          <LoggedPersonProfession>{props.profession}</LoggedPersonProfession>
        </LoggedPersonDescription>
        <img src={props.avatar} alt="logged-person__avatar" />
        <IndicatorBox>
          <Indicator></Indicator>
        </IndicatorBox>
      </LoggedPerson>
    </HeaderWrapper>
  );
};

export default Header;
