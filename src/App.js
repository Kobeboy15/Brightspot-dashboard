import { Link } from 'react-router-dom';
import './App.css';
import { StyledContainer, StyledInputWrapper, StyledInput } from './App.Styles';

function App() {
  return (
    <StyledContainer className="App">
      <div>
        <StyledInputWrapper>
          <label>What is your name?</label>
          <div>
            <StyledInput></StyledInput>
            <small>(This is will be used for display)</small>
          </div>
        </StyledInputWrapper>
        <Link to="/dashboard">Click to go dashboard</Link>
      </div>
    </StyledContainer>
  );
}

export default App;
