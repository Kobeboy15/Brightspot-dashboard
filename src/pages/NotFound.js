import { Link } from "react-router-dom";
import ErrorImg from "../assets/404.svg";
import StyledMain from "./NotFound.styles";

export default function NotFound() {
  return (
    <StyledMain>
      <img src={ErrorImg} alt="404-logo" />
      <div className="big-text">
        <h1>404 | Ooops!</h1>
        <p>Something must have gone wrong!</p>
      </div>
      <p>This page isn't ready yet, why not go back?</p>
      <Link to="/dashboard">Go back to dashboard</Link>
    </StyledMain>
  );
}
