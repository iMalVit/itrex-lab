import styled from 'styled-components';

const PatientsFooter = styled.footer`
  background: #e4ebff;
  height: 4%;
  min-height: 48px;

  @media (max-width: 460px) {
    min-height: 0;
    height: 0;
  }
`;

export default PatientsFooter;
