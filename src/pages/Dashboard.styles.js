import styled from "styled-components"

export const StyledDashboard = styled.main`
  padding: 18px 18px;
  padding-top: 60px;
  margin: auto;
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  justify-content: center;

  .credits {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 4px;
    color: gray;
    padding: 24px 0;

    h4 {
      font-size: 14px;
      font-weight: normal;

      a {
        font-weight: 700;
        text-decoration: none;
        color: #503894;
      }
    }

    h5 {
      font-size: 12px;
      font-weight: normal;
    }
  }

  @media only screen and (max-width: 700px) {
    max-width: unset;
    padding-top: 30px;
  }
`

export const StyledGreeting = styled.div`
  padding: 0 8px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 28px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

export const StyledDashboardContent = styled.div`
  display: grid;
  grid-gap: 20px;

  grid-template-columns: 1fr 2fr; 
  grid-template-rows: 1fr 1fr; 

  grid-template-areas: 
    "Profile To-Do"
    "Weather To-Do"; 

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: unset; 
    grid-template-rows: unset; 
    grid-template-areas:unset; 
  }
`