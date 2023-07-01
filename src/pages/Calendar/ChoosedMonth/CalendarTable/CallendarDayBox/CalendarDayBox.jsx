import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMonthTasks } from 'redux/tasks/selectors';
import css from './callendarDayBox.module.css';

export const CallendarDayBox = ({ date, month, picked = false }) => {
  const dateForBox = `${month}-${date.toString().padStart(2, 0)}`;
  const monthTasks = useSelector(selectMonthTasks);

  //   const tasksForThisDate = monthTasks?.filter(
  //     task =>
  //       task.date.slice(0, 10) ===
  //       `${fullDate.slice(0, 8)}${date.toString().padStart(2, 0)}`
  //   );
  return (
    <Link className={css.link} to={`/calendar/day/${dateForBox}`}>
      <div className={css.dayContainer} picked={picked}>
        <div
          className={
            picked
              ? `${css.numberContainer}, ${css[picked]}`
              : `${css.numberContainer}`
          }
        >
          <p className={picked ? `${css.day}` : `${css[picked]}`}>{date}</p>
        </div>
      </div>
    </Link>
  );
};
