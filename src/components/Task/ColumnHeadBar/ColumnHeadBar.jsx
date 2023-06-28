import React, { useState } from 'react';
import { CreateTaskModal } from '../CreateTaskModal/CreateTaskModal';

export const ColumnHeadBar = ({ title }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div className="column-head">
      <h2>{title}</h2>
      <button onClick={onClose} className="create-task-btn">
        Create Task
      </button>
      {open && <CreateTaskModal onClose={onClose} />}
    </div>
  );
};
