import { useState } from "react";
import ToDo from "../components/ToDo/ToDo";
import UserProfile from "../components/UserProfile";
import Weather from "../components/Weather";
import { TasksProvider } from "../context/TasksContext";

import { getTodaysDate } from "../utils/getTodaysDate";
import { getTimeofDay } from "../utils/getTimeofDay";

import {
  StyledDashboard,
  StyledDashboardContent,
  StyledGreeting,
} from "./Dashboard.styles";

const portfolioLink = "https://www.kobemichael.works/";

export default function Dashboard() {
  const [user] = useState("Vikram Tawahkehs");

  return (
    <StyledDashboard>
      <StyledGreeting>
        <h2>
          {getTimeofDay()}, {user.split(" ")[0]} 👋
        </h2>
        <p>It's {getTodaysDate()}</p>
      </StyledGreeting>
      <StyledDashboardContent className="Dashboard">
        <UserProfile user={user} />
        <TasksProvider>
          <ToDo />
        </TasksProvider>
        <Weather />
      </StyledDashboardContent>
      <div className="credits">
        <h4>
          Personal Dashboard by{" "}
          <a href={portfolioLink} target="_blank" rel="noreferrer">
            Kobe Michael
          </a>
        </h4>
        <h5>powered by React and OpenWeather</h5>
      </div>
    </StyledDashboard>
  );
}
