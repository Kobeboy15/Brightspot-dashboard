import { useEffect, useState } from "react";
import { StyledWeather } from "./Weather.styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function Weather() {
  const [isGeoBlocked, setIsGeoBlocked] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function success(pos) {
    const crd = pos.coords;
    setCoordinates({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  function error(err) {
    setIsGeoBlocked(true);
    // console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&exclude=hourly,daily,minutely&appid=${apiKey}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWeatherData(data.current);
        });

      fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${
          coordinates.latitude
        }&lon=${coordinates.longitude}&limit=${5}&appid=${apiKey}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCityData(data[0]);
        });

      setIsLoading(false);
    }
  }, [coordinates]);

  if (isGeoBlocked) {
    return (
      <StyledWeather>
        <div className="blocked">
          <h3>Location Blocked</h3>
          <p>Please ALLOW location tracking to enable this feature</p>
        </div>
      </StyledWeather>
    );
  }

  return (
    <StyledWeather $loading={isLoading}>
      {!isLoading && weatherData && cityData ? (
        <>
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            <OpenInNewIcon />
          </a>
          <div className="main-info">
            <img
              src={`/weather/${weatherData.weather[0].icon}.svg`}
              alt={weatherData.weather[0].id}
            />
            <div className="city-info">
              <h2>{cityData.name}</h2>
              <small>{cityData.state}</small>
            </div>
            <h1 className="temp-info">{weatherData.temp}˚C</h1>
          </div>
          <div className="additional-info">
            <div className="info-wind_speed">
              <p>{weatherData.wind_speed}mph</p>
              <small>Wind</small>
            </div>
            <div className="info-humidity">
              <p>{weatherData.humidity}%</p>
              <small>Humidity</small>
            </div>
            <div className="info-feels_like">
              <p>{weatherData.feels_like}˚C</p>
              <small>Feeling</small>
            </div>
          </div>
        </>
      ) : (
        <div className="error">
          {!isLoading && !weatherData && !cityData && "There was an error"}
        </div>
      )}
    </StyledWeather>
  );
}

export default Weather;
