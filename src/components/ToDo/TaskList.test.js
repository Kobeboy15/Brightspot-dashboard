import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskList from "./TaskList";
import { TasksContext, TasksDispatchContext } from "../../context/TasksContext";

describe("TaskList Component", () => {
  const mockDispatch = jest.fn();

  const renderWithTasksContext = (tasks) => {
    return render(
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={mockDispatch}>
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
  };

  test("renders empty message when there are no tasks", () => {
    renderWithTasksContext([]);
    expect(
      screen.getByText(/you completed all your tasks!/i)
    ).toBeInTheDocument();
  });

  test("renders a list of tasks", () => {
    const tasks = [{ id: 1, text: "Task 1", done: false }];
    renderWithTasksContext(tasks);
    expect(screen.getByText(/task 1/i)).toBeInTheDocument();
  });

  test("allows editing a task", () => {
    const tasks = [{ id: 1, text: "Task 1", done: false }];
    renderWithTasksContext(tasks);
    fireEvent.click(screen.getByTestId("edit_btn"));
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Task 1 updated" },
    });
    fireEvent.click(screen.getByTestId("save_btn"));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "changed",
      task: { id: 1, text: "Task 1 updated", done: false },
    });
  });

  test("allows deleting a task", async () => {
    const tasks = [{ id: 1, text: "Task 1", done: false }];
    renderWithTasksContext(tasks);
    jest.useFakeTimers();
    fireEvent.click(screen.getByTestId("delete_btn"));
    jest.runAllTimers();

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "deleted",
      id: 1,
    });
  });

  test("allows marking a task as done", () => {
    const tasks = [{ id: 1, text: "Task 1", done: false }];
    renderWithTasksContext(tasks);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "changed",
      task: { id: 1, text: "Task 1", done: true },
    });
  });
});
