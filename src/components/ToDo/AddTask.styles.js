import styled from "styled-components";

export const StyledAddItem = styled.div`
  display: flex;
  grid-gap: 8px;
  align-items: center;
  padding: 4px 16px;
  border-radius: 20px;

  svg {
    width: 18px;
    height: 18px;
  }

  input {
    width: 100%;
    font-size: 14px;
    padding: 14px 8px;
    outline: none;
    border: 0;
    font-family: inherit;
  }
`;

export const StyledAddButton = styled.button`
  display: flex;
  background-color: #e4d8f5;
  color: #503894;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 8px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;
