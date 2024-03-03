import { useTasks } from '../../context/TasksContext.js';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { StyledToDoSection } from './ToDo.styles.js';

export default function ToDo() {
  const tasks = useTasks();

  return (
    <StyledToDoSection>
      <div className='list-header'>
        <h1>Things to do!</h1>
        <p>You have <span>{tasks && tasks.filter((task) => !task.done).length}</span> tasks remaining</p>
      </div>
      <div className='list-container'>
        <TaskList />
      </div>
      <div>
        <AddTask />
      </div>
    </StyledToDoSection>
  )
}