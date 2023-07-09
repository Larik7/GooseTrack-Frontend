import React from 'react';
import css from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect.module.css';
import { parseDate } from 'helpers/parseDate';
import { useParams, NavLink } from 'react-router-dom';

export const PeriodTypeSelect = ({
  setSelectedDay,
  selectedDay,
  currentDate,
  setCurrentDate,
}) => {
  const params = useParams();
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
          disabled={params.currentDay ? true : false}
        >
          Day
        </NavLink>
      </div>
    </div>
  );
};
