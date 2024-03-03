import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 8px;
  height: 100vh;
  overflow: hidden;
  max-width: 800px;
  margin: auto;
  padding: 0 24px;

  h1 {
    font-size: 28px;
    font-weight: 700;
  }

  p {
    text-align: justify;
    margin-bottom: 40px;
    line-height: 36px;
  }
`;
