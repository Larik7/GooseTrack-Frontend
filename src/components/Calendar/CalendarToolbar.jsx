import React from 'react';
import { addMonths, subMonths, addDays, subDays } from 'date-fns';
import { PeriodPaginator } from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import css from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator.module.css';
import { PeriodTypeSelect } from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect';

export const CalendarToolbar = ({
  setCurrentDate,
  currentDate,
  selectedDay,
  setSelectedDay,
}) => {
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  const nextDay = () => {
    setSelectedDay(addDays(selectedDay, 1));
  };
  const prevDay = () => {
    setSelectedDay(subDays(selectedDay, 1));
  };
  return (
    <>
      <div className={css.period_container}>
        <PeriodPaginator
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          prevDay={prevDay}
          nextDay={nextDay}
          selectedDay={selectedDay}
          currentDate={currentDate}
        />
        <PeriodTypeSelect
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
    </>
  );
};
