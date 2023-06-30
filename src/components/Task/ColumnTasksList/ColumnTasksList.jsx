import { TaskItem } from '../TaskItem/TaskItem';
import css from './ColumnTasksList.module.css';

export const ColumnTasksList = ({ tasks }) => {
  return (
    <div className={css.list_task}>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};
