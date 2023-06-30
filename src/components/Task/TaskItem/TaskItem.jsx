import css from './TaskItem.module.css';

export const TaskItem = ({ task }) => {
  const MAX_TASK_LENGTH = 32;

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
          <img
            src="data:image/png;base64,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"
            alt="shevchenko"
            width={32}
            style={{ borderRadius: '50%' }}
          />
          <p className={`${priorityClass}`}>{task.priority}</p>
        </div>
        <div className={css.btn_box}>
          <button>1</button>
          <button>1</button>
          <button>1</button>
        </div>
      </div>
    </div>
  );
};
