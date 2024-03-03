import styled from "styled-components"

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const EmptyList = styled.div`
  min-height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`

export const StyledItem = styled.div`
  background-color: ${(props) => props.$done ? '#66E463' : '#F5F5F5'};
  transition: 0.1s ease-in-out;
  margin-bottom: 12px;

  @keyframes delete {
    0% {
      overflow: inherit;
      background-color: inherit;
      transform-origin: top;
      transform: scaleY(1);
      margin-bottom: 12px;
    }
    100% {
      overflow: hidden;
      background-color: transparent;
      transform-origin: top;
      transform: scaleY(0);
      margin-bottom: 0px;
    }
  }

  &.deleted {
    animation: delete 0.3s ease-out;
    padding: 0;
    height: 0;
    overflow: hidden;
    transform: scaleY(0);
    margin-bottom: 0px;
  }

  display: flex;
  grid-gap: 8px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 4px;

  .checkbox {
    width: 18px;
    height: 18px;
    border-radius: 100%;
  }

  input {
    border: 0;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    padding-left: 8px;
    flex: 1;

    text-overflow: ellipsis;
    white-space: nowrap;
    width: 300px;
    overflow: hidden;

    text-decoration: ${(props) => props.$done ? 'line-through' : 'none'};
  }
`

export const ItemButton = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 4px;
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      color: #000;
    }

    svg {
      width: 24px;
      height: 24px;
    }
`

export const StyledInput = styled.input`
  flex: 1;
  padding: 4px 6px;
  background-color: transparent;
`