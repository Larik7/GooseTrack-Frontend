import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
// import AddTaskBtn from './AddTaskBtn';

export const TasksColumn = ({ title, tasks }) => {
  return (
    <div>
      <ColumnHeadBar title={title} />
      {tasks ? <ColumnTasksList tasks={tasks} /> : <p>No tasks available.</p>}
      {/* <AddTaskBtn /> */}
    </div>
  );
};
