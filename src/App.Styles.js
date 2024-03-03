import styled from "styled-components"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    max-width: 400px;
    margin: auto;
    text-align: center;

    div {
      width: 100%;
    }

    h2 {
      font-size: 40px;
    }
  `

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  grid-gap: 8px;
  margin-bottom: 20px;

  small {
    opacity: 0.6;
  }

  div {
    display: grid;
  }

  small {
    margin-top: 12px;
  }
  
  label {
    font-weight: 700;
    font-size: 16px;
  }
`

export const StyledInput = styled.input`
  text-align: center;
  outline: 0;
  border: 1px solid;
  font-size: 14px;
  background-color: #fff;
  padding: 6px 8px;
  font-family: inherit;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`