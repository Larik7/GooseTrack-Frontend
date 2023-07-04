import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getColumns } from 'redux/tasks/selectors';
import { fetchTasks } from 'redux/tasks/taskOperation';
import { TasksColumn } from '../TaskColumn/TaskColums';

import css from './TasksColumnsList.module.css';

export const TasksColumnsList = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);

  const getTasksByCategory = category => {
    const columnKey = Object.keys(columns).find(
      key => columns[key].name === category
    );
    return columnKey ? columns[columnKey].items : [];
  };

  // Отримуємо завдання з різних категорій
  const todoTasks = getTasksByCategory('to-do');
  const inProgressTasks = getTasksByCategory('in-progress');
  const doneTasks = getTasksByCategory('done');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.columns_section}>
      <ul className={css.container}>
        <li className={css.column} key={nanoid()}>
          <TasksColumn title="To Do" tasks={todoTasks} category="to-do" />
        </li>
        <li className={css.column} key={nanoid()}>
          <TasksColumn
            title="In Progress"
            tasks={inProgressTasks}
            category="in-progress"
          />
        </li>
        <li className={css.column} key={nanoid()}>
          <TasksColumn title="Done" tasks={doneTasks} category="done" />
        </li>
      </ul>
    </div>
  );
};
