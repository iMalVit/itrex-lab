import styled from 'styled-components';
import { colors } from '../common/theme';

const PatientsFooter = styled.footer`
  background: ${colors.blue_sky};
  height: 4%;
  min-height: 48px;

  @media (max-width: 460px) {
    min-height: 0;
    height: 0;
  }
`;

export default PatientsFooter;
