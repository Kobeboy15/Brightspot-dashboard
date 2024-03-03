import styled from "styled-components";

export const StyledToDoSection = styled.section`
  grid-area: To-Do;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  max-height: 500px;
  padding: 24px 24px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 8px;

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    span {
      font-weight: 700;
    }

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      grid-gap: 4px;
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 28px - 12px - 37px);
    overflow-y: auto;
  }

  @media only screen and (max-width: 800px) {
    min-height: unset;
  }
`;
