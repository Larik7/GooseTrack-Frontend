import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';

import css from './TasksColumn.module.css';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ title, tasks, category }) => {
  return (
    <div className={css.task_column}>
      <ColumnHeadBar title={title} category={category} />
      {tasks && <ColumnTasksList tasks={tasks} />}
      <AddTaskBtn category={category} />
    </div>
  );
};
