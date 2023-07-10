import css from './TaskToolbar.module.css';
import icons from '../../../icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteTask, fetchTasks, updateTask } from 'redux/tasks/taskOperation';
import { useState, useRef, useEffect } from 'react';

import { CreateTaskModal } from '../CreateTaskModal/CreateTaskModal';

export const TaskToolbar = ({ task }) => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const { category, _id, title, start, end, priority, date } = task;
  const [isChange, setIsChange] = useState(false);

  const categoryList = [
    {
      categoryData: 'to-do',
      categoryName: 'To Do',
    },
    {
      categoryData: 'in-progress',
      categoryName: 'In Progress',
    },

    {
      categoryData: 'done',
      categoryName: 'Done',
    },
  ];

  const otherCategory = categoryList.filter(
    item => item.categoryData !== category
  );

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  const handleIsChange = () => {
    setIsChange(!isChange);
  };

  const categoryRef = useRef();
  const iconRef = useRef();

  const handleDeleteCard = async () => {
    await dispatch(deleteTask(_id));
    dispatch(fetchTasks());
  };

  useEffect(() => {
    const handleChouseCatClickOutside = e => {
      if (iconRef.current && !iconRef.current.contains(e.target)) {
        setIsChange(false);
      }
    };

    document.addEventListener('mousedown', handleChouseCatClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleChouseCatClickOutside);
    };
  }, []);

  return (
    <div className={css.toolbar_container}>
      <ul className={css.toolbar_list}>
        <li className={css.tolbar_list_item}>
          <button
            ref={iconRef}
            type="button"
            className={css.toolbar_button}
            onClick={handleIsChange}
          >
            <svg className={css.toolbar_svg} width="14px" height="14px">
              <use href={`${icons}#icon-arrow-circle-broken-right`}></use>
            </svg>
            {isChange && (
              <div className={css.change_box}>
                <ul>
                  {otherCategory.map(item => (
                    <li
                      ref={categoryRef}
                      key={item.categoryData}
                      className={css.change_box_item}
                      onClick={async e => {
                        const newTaskData = {
                          category: item.categoryData,
                          title,
                          start,
                          end,
                          priority,
                          date,
                        };
                        await dispatch(
                          updateTask({ taskId: _id, task: newTaskData })
                        );
                        setIsChange(false);
                        dispatch(fetchTasks());
                      }}
                    >
                      <p className={css.change_box_text}>
                        {item.categoryName}
                        <svg
                          className={css.toolbar_svg}
                          width="14px"
                          height="14px"
                        >
                          <use
                            href={`${icons}#icon-arrow-circle-broken-right`}
                          ></use>
                        </svg>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </li>
        <li className={css.tolbar_list_item}>
          <button
            type="button"
            className={css.toolbar_button}
            onClick={handleToggleModal}
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
            onClick={handleDeleteCard}
          >
            <svg className={css.toolbar_svg} width="14px" height="14px">
              <use href={`${icons}#icon-trash-04`}></use>
            </svg>
          </button>
        </li>
      </ul>
      {isOpened && <CreateTaskModal onClose={handleToggleModal} task={task} />}
    </div>
  );
};

export default TaskToolbar;
