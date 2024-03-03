import { Link } from "react-router-dom";
import "./App.css";
import { StyledContainer, StyledDashboardButton } from "./App.Styles";

function App() {
  return (
    <StyledContainer className="App">
      <h1>Welcome to my Dashboard Assignment</h1>
      <p>
        This project involves creating a personal dashboard with React.js to
        display user information, a to-do list, and the user's local weather. It
        aims to assess my skills in React basics, state management, and API
        integration.
      </p>
      <Link to="/dashboard">
        <StyledDashboardButton>View dashboard</StyledDashboardButton>
      </Link>
    </StyledContainer>
  );
}

export default App;
