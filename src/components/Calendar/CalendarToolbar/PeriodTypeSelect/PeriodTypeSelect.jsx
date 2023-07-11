import React from 'react';
import css from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect.module.css';
import { parseDate } from 'helpers/parseDate';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectActiveDate } from 'redux/tasks/selectors';

export const PeriodTypeSelect = ({
  setSelectedDay,
  selectedDay,
  currentDate,
  setCurrentDate,
}) => {
  const currentMonth = useSelector(selectActiveDate);
  const parsedDate = parseDate(currentDate);
  return (
    <div className={css.tabs_flex}>
      <div className={css.types_tabs_container}>
        <NavLink
          className={css.types_tabs}
          to="/calendar"
          onClick={() => {
            setCurrentDate(selectedDay);
          }}
        >
          Month
        </NavLink>
        <NavLink
          className={`${css.types_tabs} ${
            window.location.pathname.includes('/day/') ? 'active' : ''
          }`}
          to={`day/${parsedDate}`}
          onClick={() => {
            setSelectedDay(currentDate);
          }}
          disabled={currentMonth ? true : false}
        >
          Day
        </NavLink>
      </div>
    </div>
  );
};
