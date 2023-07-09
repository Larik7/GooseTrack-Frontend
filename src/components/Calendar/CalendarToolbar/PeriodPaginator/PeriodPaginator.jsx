import React, { useEffect } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { format, isValid } from 'date-fns';
import css from './PeriodPaginator.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { parseDate } from 'helpers/parseDate';

export const PeriodPaginator = ({
  selectedDay,
  nextMonth,
  prevMonth,
  prevDay,
  currentDate,
  nextDay,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!params.currentDay) {
      return;
    }
    const parsedDate = parseDate(selectedDay);

    navigate(`/calendar/day/${parsedDate}`);
  }, [selectedDay, navigate, params.currentDay]);

  const monthFormat = 'LLLL y';
  const dayFormat = 'd MMM y';

  const formattedMonth = format(currentDate, monthFormat);
  let formattedDay = '';
  if (isValid(selectedDay)) {
    formattedDay = format(selectedDay, dayFormat);
  }

  const handlePrevClick = () => {
    if (params.currentDay) {
      prevDay();
    } else {
      prevMonth();
    }
  };

  const handleNextClick = () => {
    if (params.currentDay) {
      nextDay();
    } else {
      nextMonth();
    }
  };

  return (
    <div className={css.group_period}>
      <div className={css.period_view}>
        {params.currentDay ? formattedDay : formattedMonth}
      </div>
      <div className={css.period_tabs_container}>
        <button className={css.period_tabs} onClick={handlePrevClick}>
          <AiOutlineLeft className={css.icon} />
        </button>
        <button
          className={css.period_tabs}
          style={{ transform: 'rotate(180deg)' }}
          onClick={handleNextClick}
        >
          <AiOutlineLeft className={css.icon} />
        </button>
      </div>
    </div>
  );
};
