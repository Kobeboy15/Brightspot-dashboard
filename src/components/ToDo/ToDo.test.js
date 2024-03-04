import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToDo from "./ToDo";
import * as TasksContextModule from "../../context/TasksContext";

jest.mock("../../context/TasksContext.js", () => ({
  useTasks: jest.fn(),
  useTasksDispatch: jest.fn(),
}));

describe("ToDo Component", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockDispatch.mockReset();
    TasksContextModule.useTasksDispatch.mockReturnValue(mockDispatch);
  });

  test("renders ToDo component with no tasks", () => {
    TasksContextModule.useTasks.mockReturnValue([]);
    render(<ToDo />);
    expect(screen.getByText("Things to do!")).toBeInTheDocument();
    expect(
      parseInt(screen.getByTestId("task_amount").textContent)
    ).toStrictEqual(0);
  });

  test("renders ToDo component with tasks remaining", () => {
    TasksContextModule.useTasks.mockReturnValue([
      { id: 1, text: "Task 1", done: false },
      { id: 2, text: "Task 2", done: true },
    ]);
    render(<ToDo />);
    expect(parseInt(screen.getByTestId("task_amount").textContent)).toEqual(1);
  });

  test("renders ToDo component with all tasks done", () => {
    TasksContextModule.useTasks.mockReturnValue([
      { id: 1, text: "Task 1", done: true },
      { id: 2, text: "Task 2", done: true },
    ]);
    render(<ToDo />);
    expect(
      parseInt(screen.getByTestId("task_amount").textContent)
    ).toStrictEqual(0);
  });
});
