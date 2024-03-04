import { getTodaysDate } from "./getTodaysDate";

beforeAll(() => {
  jest.useFakeTimers("modern").setSystemTime(new Date(2021, 0, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

test("getTodaysDate returns the correct date string", () => {
  const expectedDate = "Friday, January 1, 2021";
  expect(getTodaysDate()).toBe(expectedDate);
});
