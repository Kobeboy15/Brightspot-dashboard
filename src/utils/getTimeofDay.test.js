import { getTimeofDay } from "./getTimeofDay";

beforeEach(() => {
  jest.useFakeTimers("modern");
});

afterEach(() => {
  jest.useRealTimers();
});

test("returns Good Morning before 12 PM", () => {
  jest.setSystemTime(new Date(2020, 3, 1, 9));
  expect(getTimeofDay()).toBe("Good Morning");
});

test("returns Good Afternoon between 12 PM and 6 PM", () => {
  jest.setSystemTime(new Date(2020, 3, 1, 15));
  expect(getTimeofDay()).toBe("Good Afternoon");
});

test("returns Good Evening after 6 PM", () => {
  jest.setSystemTime(new Date(2020, 3, 1, 19));
  expect(getTimeofDay()).toBe("Good Evening");
});
