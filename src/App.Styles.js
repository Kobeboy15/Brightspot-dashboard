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
