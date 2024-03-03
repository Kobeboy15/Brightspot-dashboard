import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 12px;
  height: 100vh;
  overflow: hidden;
  max-width: 800px;
  margin: auto;
  padding: 0 24px;
  text-align: center;
  animation: fadeInApp 1.2s cubic-bezier(0.29, 0.005, 0.085, 1.01);

  @keyframes fadeInApp {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  p {
    margin-bottom: 20px;
    line-height: 36px;
  }
`;

export const StyledDashboardButton = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  color: #503894;
  font-weight: 700;
  font-size: 16px;
  border-radius: 20px;
  outline: 0;
  border: 0;
  background-color: #e4d8f5;
  padding: 12px 32px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #cdc2dc;
    transition: 0.2s ease-in-out;
  }
`;
