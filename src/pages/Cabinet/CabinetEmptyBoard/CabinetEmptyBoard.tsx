import React from 'react';
import { Board } from '../common/common.style';
import {
  EmptyBox,
  EmptyBoxLogo,
  EmptyBoxText,
} from './CabinetEmptyBoard.style';

const CabinetEmptyBoard = () => (
  <Board>
    <EmptyBox>
      <EmptyBoxLogo />
      <EmptyBoxText>
        You have no patients yet.
        {' '}
        <br />
        To create a patient profile, please contact your administrator.
      </EmptyBoxText>
    </EmptyBox>
  </Board>
);

export default CabinetEmptyBoard;
