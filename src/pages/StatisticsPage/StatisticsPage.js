import css from './StatisticsPage.module.css';
import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';
import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import style from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator.module.css';

export const StatisticsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevClick = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate);
  };

  const handleNextClick = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  const formattedDay = selectedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  

  return (
    <div className={css.mainComponent}>
      <Suspense fallback={null}>
       
        <div className={css.upperchart}>
          <div className={css.group_periodSt}>
          <div className={style.period_view}>
            {formattedDay}
          </div>
          <div className={style.period_tabs_container}>
            <button className={style.period_tabs} onClick={handlePrevClick}>
              <AiOutlineLeft className={css.icon} />
            </button>
            <button
              className={style.period_tabs}
              style={{ transform: 'rotate(180deg)' }}
              onClick={handleNextClick}
            >
              <AiOutlineLeft className={style.icon} />
            </button>
          </div>
        </div>
          <ul className={css.list}>
            <li className={css.itemDay}>By Day</li>
            <li className={css.itemMonth}>By Month</li>
          </ul>
        </div>
        <div className={css.chart}>
          <StatisticsChart selectedDate={selectedDate} />
        </div>
        <Outlet />
      </Suspense>
    </div>
  );
};
