import { Link } from "react-router-dom";
import "./App.css";
import { StyledContainer } from "./App.Styles";

function App() {
  const brightspotUrl = "https://www.getbrightspot.com/";

  return (
    <StyledContainer className="App">
      <h1>Welcome to my Dashboard Assignment</h1>
      <p>
        This project aims to assess my proficiency in React fundamentals, state
        management, and interaction with external APIs. This project, assigned
        by{" "}
        <a href={brightspotUrl} target="_blank" rel="noreferrer">
          Brightspot
        </a>
        , involves developing a personal dashboard application utilizing
        React.js. The application is designed to showcase a user's personal
        information, a to-do list, and the current weather in their city. The
        primary goal of this initiative is to evaluate my understanding and
        skills in React fundamentals, effective state management, and the
        ability to integrate and interact with external APIs.
      </p>
      <Link to="/dashboard">Click to go dashboard</Link>
    </StyledContainer>
  );
}

export default App;
