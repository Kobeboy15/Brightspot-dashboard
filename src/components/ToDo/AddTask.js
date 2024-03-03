import { useState } from "react";
import { useTasks, useTasksDispatch } from "../../context/TasksContext";
import AddIcon from "@mui/icons-material/Add";
import { StyledAddItem, StyledAddButton } from "./AddTask.styles";

export default function AddTask() {
  const tasks = useTasks();
  const [text, setText] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useTasksDispatch();

  let nextId =
    tasks.length !== 0 ? Math.max(...tasks.map((item) => item.id)) : -1;

  function handleAddTask() {
    setText("");
    setIsAdd(false);
    dispatch({
      type: "added",
      id: nextId + 1,
      text: text,
    });
  }

  if (!isAdd) {
    return (
      <StyledAddButton onClick={() => setIsAdd(true)}>Add Item</StyledAddButton>
    );
  }

  return (
    <StyledAddItem>
      <AddIcon />
      <input
        autoFocus
        placeholder="Add a new item"
        value={text}
        onKeyDown={(e) => {
          if (e.code === "Enter" && text.length > 0) {
            handleAddTask();
          }
        }}
        onBlur={() => {
          if (text.length > 0) {
            handleAddTask();
          }
        }}
        onChange={(e) => setText(e.target.value)}
      />
    </StyledAddItem>
  );
}
