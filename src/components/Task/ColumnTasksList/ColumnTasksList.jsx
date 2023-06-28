import { TaskItem } from '../TaskItem/TaskItem';

export const ColumnTasksList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
