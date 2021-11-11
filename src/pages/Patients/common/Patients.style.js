import styled from "styled-components";

export const Content = styled.div`
  min-width: 270px;
  background: #e4ebff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const Board = styled.main`
  max-width: 2560px;
  box-sizing: border-box;
  flex-direction: column;
  padding: 40px 16px 16px 48px;
  display: flex;
  border-radius: 16px;
  width: 93%;
  min-height: 400px;
  margin: 0 auto;
  height: 89%;
  background: #f9faff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);

  @media (max-width: 460px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    height: 95%;
    border-radius: 16px 16px 0 0;
  }
`;

export const BoardTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  margin: 0;
`;

export const BoardBox = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (min-width: 2400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1455px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  overflow-y: auto;
  padding-right: 44px;

  @media (max-width: 1000px) {
    padding-right: 32px;
  }

  @media (max-width: 560px) {
    padding-right: 0;
  }
`;

export const ResolutionsButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 8px;
  color: #7297ff;
  background: #ffffff;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);

  @media (max-width: 768px) {
    display: ${(props) =>
      props.page === "PatientsUserView" ? "none" : "inline-block"};
  }

  @media (max-width: 460px) {
    width: 120px;
  }

  @media (max-width: 317px) {
    width: 104px;
  }
`;

export const PatientsButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  background-color: #7297ff;
  font-weight: 600;

  margin-right: 12px;
  margin-bottom: 56px;

  @media (max-width: 460px) {
    width: 120px;
  }

  @media (max-width: 317px) {
    width: 104px;
  }

  @media (max-width: 460px) {
    margin-right: 24px;
    margin-bottom: 40px;
  }

  @media (max-width: 317px) {
    margin-right: 10px;
  }
`;
