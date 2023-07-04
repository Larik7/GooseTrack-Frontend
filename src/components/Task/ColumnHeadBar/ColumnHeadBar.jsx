import React, { useState } from 'react';
import { CreateTaskModal } from '../CreateTaskModal/CreateTaskModal';
import { BiPlusCircle } from 'react-icons/bi';
import css from './ColumnHeadBar.module.css';

export const ColumnHeadBar = ({ title, category }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div className={css.head}>
      <h2 className={css.title}>{title}</h2>
      <button onClick={onClose} className={css.add_btn}>
        <BiPlusCircle className={css.icon} />
      </button>
      {open && <CreateTaskModal onClose={onClose} category={category} />}
    </div>
  );
};
