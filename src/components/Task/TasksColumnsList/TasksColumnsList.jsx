import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/taskOperation';
import { TasksColumn } from '../TaskColumn/TaskColums';
import css from './TasksColumnsList.module.css';

export const TasksColumnsList = ({ sortedTasksData }) => {
  const dispatch = useDispatch();

  const todoTasks = sortedTasksData.toDo;
  const inProgressTasks = sortedTasksData.inProgress;
  const doneTasks = sortedTasksData.done;

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
