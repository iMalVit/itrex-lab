import styled from 'styled-components';

export const StyledWrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const StyledImg = styled.img`
max-width: 50%`;

export const StyledTextTop = styled.p`
margin-top: 40px;
color:#A1ABC9;
font-size: 24px;
line-height: 110%;
font-weight: 600;
`;

export const StyledText = styled(StyledTextTop)`
margin-top: 0;
max-width: 33%;
text-align: center;
@media (max-width: 1200px) {
    max-width: 50%;
}
`;
