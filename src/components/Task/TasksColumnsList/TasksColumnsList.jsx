import React from 'react';
import { TasksColumn } from '../TaskColumn/TaskColums';

export const TasksColumnsList = ({ todoTasks, inProgressTasks, doneTasks }) => {
  return (
    <div>
      <ul>
        <li>
          {' '}
          <TasksColumn title="To Do" tasks={todoTasks} />
        </li>
        <li>
          {' '}
          <TasksColumn title="In Progress" tasks={inProgressTasks} />
        </li>
        <li>
          <TasksColumn title="Done" tasks={doneTasks} />
        </li>
      </ul>
    </div>
  );
};
