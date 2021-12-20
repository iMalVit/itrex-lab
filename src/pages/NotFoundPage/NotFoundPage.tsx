import React from 'react';
import dictionary from '../../common/dictionary';
import {
  StyledWrapper, StyledImg, StyledTextTop, StyledText,
} from './NotFoundPage.style';

const NotFoundPage = () => (
  <StyledWrapper>
    <StyledImg src="/assets/images/404page.png" alt="404" />
    <StyledTextTop>{dictionary.errorPage404.title}</StyledTextTop>
    <StyledText>
      {dictionary.errorPage404.text}
    </StyledText>
  </StyledWrapper>
);

export default NotFoundPage;
