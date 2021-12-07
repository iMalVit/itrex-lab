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

const Header: React.FC<{userInfo: any}> = (props) => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <LoggedPerson>
        <LoggedPersonDescription>
          <LoggedPersonName>
            {props.userInfo.first_name} {props.userInfo.last_name}
          </LoggedPersonName>
          <LoggedPersonProfession>{props.userInfo.role_name}</LoggedPersonProfession>
        </LoggedPersonDescription>
        <UserLogo src={props.userInfo.photo} alt="avatar" />
        <IndicatorBox>
          <Indicator></Indicator>
        </IndicatorBox>
      </LoggedPerson>
    </HeaderWrapper>
  );
};

export default Header;
