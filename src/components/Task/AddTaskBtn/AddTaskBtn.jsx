import React, { useState } from 'react';
import { CreateTaskModal } from '../CreateTaskModal/CreateTaskModal';

import css from './AddTaskBtn.module.css';

export const AddTaskBtn = ({ tasks }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div className={css.head}>
      <button onClick={onClose} className={css.add_btn}>
        Add task
      </button>
      {open && <CreateTaskModal onClose={onClose} tasks={tasks} />}
    </div>
  );
};
