import { useState } from 'react';
import { useTasksDispatch } from '../../context/TasksContext'
import AddIcon from '@mui/icons-material/Add';
import { StyledAddItem, StyledAddButton } from './AddTask.styles';

export default function AddTask() {
  const [text, setText] = useState('');
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useTasksDispatch();

  function handleAddTask() {
    setText('');
    setIsAdd(false);
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  if (!isAdd) {
    return (
      <StyledAddButton onClick={() => setIsAdd(true)}>
        Add Item
      </StyledAddButton>
    )
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
        onChange={e => setText(e.target.value)}
      />
    </StyledAddItem>
  );
}

let nextId = 3;
