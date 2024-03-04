import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTask from "./AddTask";
import { useTasks, useTasksDispatch } from "../../context/TasksContext";

// Mock useTasks and useTasksDispatch hooks
jest.mock("../../context/TasksContext", () => ({
  useTasks: jest.fn(),
  useTasksDispatch: jest.fn(),
}));

describe("AddTask Component", () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    // Mock the context data and dispatch function
    useTasks.mockImplementation(() => []);
    useTasksDispatch.mockImplementation(() => dispatchMock);
  });

  test('renders the "Add Item" button initially', () => {
    render(<AddTask />);
    expect(
      screen.getByRole("button", { name: /add item/i })
    ).toBeInTheDocument();
  });

  test('clicking the "Add Item" button shows the input field', () => {
    render(<AddTask />);
    fireEvent.click(screen.getByRole("button", { name: /add item/i }));
    expect(screen.getByPlaceholderText(/add a new item/i)).toBeInTheDocument();
  });

  test("adds a task on Enter key press", () => {
    render(<AddTask />);
    fireEvent.click(screen.getByRole("button", { name: /add item/i }));
    const input = screen.getByPlaceholderText(/add a new item/i);
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { code: "Enter" });
    expect(dispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({ type: "added", text: "New Task" })
    );
  });

  test("adds a task on input field blur", () => {
    render(<AddTask />);
    fireEvent.click(screen.getByRole("button", { name: /add item/i }));
    const input = screen.getByPlaceholderText(/add a new item/i);
    fireEvent.change(input, { target: { value: "Another Task" } });
    fireEvent.blur(input);
    expect(dispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({ type: "added", text: "Another Task" })
    );
  });
});
