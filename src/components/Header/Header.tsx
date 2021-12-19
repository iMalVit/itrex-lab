import React from 'react';
import HeaderLogo from './HeaderLogo';
import {
  HeaderWrapper,
  IndicatorBox,
  Indicator,
  LoggedPerson,
  LoggedPersonDescription,
  LoggedPersonName,
  LoggedPersonProfession,
  UserLogo,
} from './Header.style';

interface HeaderPropsType {
  userInfo: {
    id: string;
    first_name: string;
    last_name: string;
    photo: string;
    role_name: string;
  }
}

const Header: React.FC<HeaderPropsType> = (props) => (
  <HeaderWrapper>
    <HeaderLogo />
    <LoggedPerson>
      <LoggedPersonDescription>
        <LoggedPersonName>
          {props.userInfo.first_name}
          {' '}
          {props.userInfo.last_name}
        </LoggedPersonName>
        <LoggedPersonProfession>{props.userInfo.role_name}</LoggedPersonProfession>
      </LoggedPersonDescription>
      <UserLogo src={props.userInfo.photo} alt="avatar" />
      <IndicatorBox>
        <Indicator />
      </IndicatorBox>
    </LoggedPerson>
  </HeaderWrapper>
);

export default Header;
