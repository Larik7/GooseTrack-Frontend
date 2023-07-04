import css from './StatisticsPage.module.css';

import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import { PeriodPaginator } from 'components/Calendar/CalendarToolbar/PeriodPaginator/PeriodPaginator';

export const StatisticsPage = () => {
  return (
    <div className={css.mainComponent}>
    
      <Suspense fallback={null}>
        {
          <div className={css.wrapper}>
            {/* <PeriodPaginator /> */}
            <div className={css.upperchart}>
              <ul className={css.list}>
                <li className={css.itemDay}>By Day</li>
                <li className={css.itemMonth}>By Month</li>
              </ul>
            </div>
            <div className={css.chart}>
              <StatisticsChart />
            </div>
          </div>
        }
        <Outlet />
      </Suspense>
    </div>
  );
};
