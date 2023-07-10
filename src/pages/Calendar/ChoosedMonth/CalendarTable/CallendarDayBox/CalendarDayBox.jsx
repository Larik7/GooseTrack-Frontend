import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/selectors';
import css from './callendarDayBox.module.css';
import { nanoid } from 'nanoid';
import { setActivedDate } from 'redux/tasks/taskReducer';
// import { grey } from '@mui/material/colors';

export const CallendarDayBox = ({
  date,
  month,
  picked = false,
  currentMonth,
  setCurrentDate,
  setSelectedDay,
  disabled,
}) => {
  const dispatch = useDispatch();

  const dateForBox = `${month}-${date.toString().padStart(2, 0)}`;

  const allTasks = useSelector(selectAllTasks);
  const activeDate = currentMonth.toISOString().slice(0, 8);

  const tasksForThisMonth = allTasks?.filter(
    task =>
      task.date.slice(0, 10) ===
      `${activeDate.slice(0, 8)}${date.toString().padStart(2, 0)}`
  );
  const tasksForThisMonthsWeek = tasksForThisMonth.filter(
    task => task.date.slice(0, 7) === month
  );
  const handleDayBox = () => {
    setCurrentDate(new Date(dateForBox));
    setSelectedDay(new Date(dateForBox));
    dispatch(setActivedDate(dateForBox));
  };
  return (
    <Link
      className={css.link}
      to={`/calendar/day/${dateForBox}`}
      onClick={handleDayBox}
      style={disabled ? { pointerEvents: 'none' } : null}
    >
      <div
        className={css.dayContainer}
        style={
          disabled
            ? { background: 'var(--day-backgraund-color)' }
            : { background: 'var(--container-page-bacground)' }
        }
      >
        <div className={picked ? `${css[picked]}` : `${css.numberContainer}`}>
          <p className={picked ? `${css.day}` : `${css[picked]}`}>{date}</p>
        </div>
        <div className={css.taskContainer}>
          <ul className={css.taskList}>
            {tasksForThisMonthsWeek.map(task => (
              <li
                className={
                  task.priority
                    ? `${css.taskItem}, ${css[task.priority]}`
                    : `${css.taskItem}`
                }
                key={nanoid()}
              >
                {task.length < 6 ? task.title : `${task.title.slice(0, 6)}...`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};
