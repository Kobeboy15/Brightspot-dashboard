import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Weather from "./Weather";

const mockWeatherData = {
  current: {
    temp: 22,
    weather: [{ icon: "01d", id: "sunny" }],
    wind_speed: 10,
    humidity: 50,
    feels_like: 21,
  },
};

const mockCityData = [
  {
    name: "Springfield",
    state: "SomeState",
  },
];

beforeEach(() => {
  // Mock fetch
  global.fetch = jest.fn((url) =>
    Promise.resolve({
      json: () =>
        url.includes("onecall")
          ? Promise.resolve(mockWeatherData)
          : Promise.resolve(mockCityData),
    })
  );

  // Mock navigator.geolocation.getCurrentPosition
  global.navigator.geolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
      success({
        coords: {
          latitude: 40.712776,
          longitude: -74.005974,
        },
      })
    ),
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders location blocked message when geolocation is blocked", async () => {
  // Override the geolocation mock for this test
  global.navigator.geolocation.getCurrentPosition = jest
    .fn()
    .mockImplementationOnce((success, error) =>
      error({
        code: 1,
        message: "Geolocation is blocked",
      })
    );

  render(<Weather />);

  expect(await screen.findByText(/Location Blocked/)).toBeInTheDocument();
  expect(
    screen.getByText(/Please ALLOW location tracking to enable this feature/)
  ).toBeInTheDocument();
});

test("renders weather information after successful API calls", async () => {
  render(<Weather />);

  // Check if the loading state is properly handled
  expect(screen.queryByText("Loading...")).not.toBeInTheDocument(); // Assuming you handle loading state internally

  // Use waitFor to handle async behavior
  await waitFor(() => {
    expect(screen.getByText("Springfield")).toBeInTheDocument();
    expect(screen.getByText("22˚C")).toBeInTheDocument();
  });
});
