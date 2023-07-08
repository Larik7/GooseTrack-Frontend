import css from './TaskItem.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { useState } from 'react';
import TaskToolbar from '../TaskToolbar/TaskToolbar';

export const TaskItem = ({ task }) => {
  const user = useSelector(selectUser);
  const [avatar, setAvatar] = useState('');

  const MAX_TASK_LENGTH = 32;

  useEffect(() => {
    if (!user.avatarURL) {
      setAvatar(user.name.slice(0, 1).toUpperCase());
    }
  }, [user.avatarURL, user.name]);

  const renderTaskText = task => {
    if (task.length > MAX_TASK_LENGTH) {
      return `${task.slice(0, MAX_TASK_LENGTH)}...`;
    }
    return task;
  };

  let priorityClass = '';

  if (task.priority === 'high') {
    priorityClass = css.highPriority;
  } else if (task.priority === 'medium') {
    priorityClass = css.mediumPriority;
  } else if (task.priority === 'low') {
    priorityClass = css.lowPriority;
  }

  return (
    <div className={css.item}>
      <p className={css.text}>{renderTaskText(task.title)}</p>
      <div className={css.container_item}>
        <div className={css.img_box}>
          {user.avatarURL ? (
            <img
              src={user.avatarURL}
              alt="avatar"
              width={32}
              style={{ borderRadius: '50%', height: 32 }}
            />
          ) : (
            <p className={css.avatarWord}>{user ? avatar : 'l'}</p>
          )}
          <p className={`${priorityClass}`}>{task.priority}</p>
        </div>
        <div className={css.btn_box}>
          <TaskToolbar task={task} />
        </div>
      </div>
    </div>
  );
};
