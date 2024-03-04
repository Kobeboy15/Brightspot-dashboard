import { useState } from "react";
import { useTasks, useTasksDispatch } from "../../context/TasksContext";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  StyledList,
  EmptyList,
  StyledInput,
  StyledItem,
  ItemButton,
} from "./TaskList.styles";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <StyledList>
      {tasks
        .sort((a, b) => a.done - b.done)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
      {tasks.length === 0 && (
        <EmptyList>You completed all your tasks! 🎉</EmptyList>
      )}
    </StyledList>
  );
}

function Task({ task }) {
  const [taskText, setTaskText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useTasksDispatch();

  function handleEdit(e) {
    setTaskText(e.target.value);
  }

  let taskContent;
  if (isEditing) {
    taskContent = (
      <StyledInput
        type="text"
        value={taskText}
        autoFocus
        onChange={(e) => {
          handleEdit(e);
        }}
      />
    );
  } else {
    taskContent = <p>{task.text}</p>;
  }
  return (
    <StyledItem $done={task.done} className={isDeleted && "deleted"}>
      <input
        className="checkbox"
        type="checkbox"
        finished={task.done.toString()}
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      {!isEditing ? (
        <>
          {!task.done && (
            <ItemButton
              data-testid="edit_btn"
              onClick={() => {
                setTaskText(task.text);
                setIsEditing(true);
              }}
            >
              <EditIcon />
            </ItemButton>
          )}
          <ItemButton
            data-testid="delete_btn"
            onClick={() => {
              setIsDeleted(true);
              setTimeout(() => {
                dispatch({
                  type: "deleted",
                  id: task.id,
                });
              }, 500);
            }}
          >
            <DeleteIcon />
          </ItemButton>
        </>
      ) : (
        <>
          <ItemButton
            data-testid="save_btn"
            onClick={() => {
              dispatch({
                type: "changed",
                task: {
                  ...task,
                  text: taskText,
                },
              });
              setIsEditing(false);
            }}
          >
            <CheckIcon />
          </ItemButton>
          <ItemButton
            onClick={() => {
              setTaskText(task.text);
              setIsEditing(false);
            }}
          >
            <CloseIcon />
          </ItemButton>
        </>
      )}
    </StyledItem>
  );
}
