import css from './TaskToolbar.module.css';
import icons from '../../../icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/taskOperation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/selectors';
import { Modal } from '../TaskModal/TaskModal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskToolbar = ({ id }) => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const tasks = useSelector(selectAllTasks);

  const handeleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  const handeleChangeCategory = () => {};
  // const handeleEditCard = () => {
  //   dispatch(updateTask(id));
  // };
  const handeleDeleteCard = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className={css.toolbar_container}>
      <ul className={css.toolbar_list}>
        <li className={css.tolbar_list_item}>
          <button
            type="button"
            className={css.toolbar_button}
            onClick={handeleChangeCategory}
          >
            <svg className={css.toolbar_svg} width="14px" height="14px">
              <use href={`${icons}#icon-arrow-circle-broken-right`}></use>
            </svg>
          </button>
        </li>
        <li className={css.tolbar_list_item}>
          <button
            type="button"
            className={css.toolbar_button}
            onClick={handeleToggleModal}
          >
            <svg className={css.toolbar_svg} width="14px" height="14px">
              <use href={`${icons}#icon-pencil-01`}></use>
            </svg>
          </button>
        </li>
        <li className={css.tolbar_list_item}>
          <button
            type="button"
            className={css.toolbar_button}
            onClick={handeleDeleteCard}
          >
            <svg className={css.toolbar_svg} width="14px" height="14px">
              <use href={`${icons}#icon-trash-04`}></use>
            </svg>
          </button>
        </li>
      </ul>
      {isOpened && (
        <Modal onClose={handeleToggleModal}>
          <TaskForm onClose={handeleToggleModal} tasks={tasks} />
        </Modal>
      )}
    </div>
  );
};

export default TaskToolbar;
