import React from 'react';
import { Link } from 'react-router-dom';
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
import PATH from '../../routes/routes';

interface HeaderPropsType {
  userInfo: {
    id: string;
    first_name: string;
    last_name: string;
    photo: string;
    role_name: string;
  }
}

export const Header: React.FC<HeaderPropsType> = (props) => (
  <HeaderWrapper>
    <Link to={PATH.CABINET}>
      <HeaderLogo />
    </Link>
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
