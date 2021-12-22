import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  width: 332px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;

  @media (max-width: 370px) {
    width: 264px;
  }
`;

export default ButtonsWrapper;
