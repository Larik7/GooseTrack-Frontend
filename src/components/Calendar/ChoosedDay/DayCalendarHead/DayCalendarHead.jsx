import { useState, useEffect, memo } from 'react';
import {
  format,
  formatISO,
  startOfWeek,
  startOfDay,
  parseISO,
  lastDayOfWeek,
  eachDayOfInterval,
  isBefore,
} from 'date-fns';
import { selectUser } from 'redux/auth/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './DayCalendarHead.module.css';
import { setActivedDate } from 'redux/tasks/taskReducer';
import { useDispatch } from 'react-redux';
import { selectActiveDate } from 'redux/tasks/selectors';
// import { relativeTimeRounding } from 'moment/moment';

export const DayCalendarHead = ({ setSelectedDay }) => {
  const { currentDay: targetDate } = useParams();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const formatofWeek = 'eeee';
  const [time, setTime] = useState(new Date());
  const dispatch = useDispatch();
  const currentData = useSelector(selectActiveDate);

  useEffect(() => {
    const calendarDate = new Date(targetDate);
    setTime(calendarDate);
  }, [targetDate, currentData]);

  const startDate = startOfWeek(time, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(time, { weekStartsOn: 1 });

  const getTotalDate = () => {
    return eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
  };

  const totalDate = getTotalDate();

  let longWeeksString = window.innerWidth <= 768 ? 1 : 3;

  const formatDate = date => formatISO(date).slice(0, 10);

  const curenttDayStyle = cureDayStyl => formatDate(cureDayStyl) === targetDate;
  const selectedDay = dayWeeks => formatDate(dayWeeks) === targetDate;
  const handleChangDay = dayData => {
    dispatch(setActivedDate(formatDate(dayData)));
    setSelectedDay(dayData);
    navigate(`/calendar/day/${formatDate(dayData)}`);
  };

  const renderDayComponent = (week, isSelected) => {
    const dayComponent = curenttDayStyle(week) ? (
      <div className={css.current_item}>{week.getDate()}</div>
    ) : (
      <div className={css.week_item_day}>{week.getDate()}</div>
    );

    const disableButton = isBefore(
      startOfDay(week),
      startOfDay(parseISO(user.createdAt))
    );
    return isSelected ? (
      <button
        className={css.selected_day}
        onClick={() => handleChangDay(week)}
        disabled={disableButton}
      >
        {dayComponent}
      </button>
    ) : (
      <button
        className={css.not_selected_day}
        onClick={() => handleChangDay(week)}
        disabled={disableButton}
      >
        {dayComponent}
      </button>
    );
  };

  const formatWeekName = week =>
    format(week, formatofWeek).substring(0, longWeeksString);

  return (
    <div className={css.grid_weeks_container}>
      {totalDate.map(week => (
        <div className={css.weeks_item} key={week.getTime()}>
          <div className={css.weeks_item_name}>{formatWeekName(week)}</div>

          {renderDayComponent(week, selectedDay(week))}
        </div>
      ))}
    </div>
  );
};

export default memo(DayCalendarHead);
