import css from './StatisticsPage.module.css';
import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';
import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DatePickerCalendar,
  DatePickerWrapper,
} from 'components/UserForm/DatePicker/DatePicker.styled';

export const StatisticsPage = () => {
  const [valueDatePicker, setValueDatePicker] = useState(new Date());

  const handlePrevClick = () => {
    const prevDate = new Date(valueDatePicker);
    prevDate.setDate(prevDate.getDate() - 1);
    setValueDatePicker(prevDate);
  };

  const handleNextClick = () => {
    const nextDate = new Date(valueDatePicker);
    nextDate.setDate(nextDate.getDate() + 1);
    setValueDatePicker(nextDate);
  };

  // const formattedDay = selectedDate.toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });

  const getValueDate = changeDate => {
    moment(changeDate).format('YYYY-MM-DD');
  };

  return (
    <div className={css.mainComponent}>
      <Suspense fallback={null}>
        <div className={css.group_period}>
          {' '}
          <div className={css.suspenseContainer}>
            <div className={css.period_view}>
              {/* {formattedDay} */}
              <div className={css.picker}>
                <DatePickerWrapper>
                  <DatePickerCalendar
                    selected={valueDatePicker}
                    dateFormat="d MMM y"
                    onChange={date => {
                      setValueDatePicker(date);
                      getValueDate(date);
                    }}
                  />
                </DatePickerWrapper>
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
            </div>

            <div className={css.upperchart}>
              <ul className={css.list}>
                <li className={css.itemDay}>By Day</li>
                <li className={css.itemMonth}>By Month</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.chart}>
          <StatisticsChart selectedDate={valueDatePicker} />
        </div>
        <Outlet />
      </Suspense>
    </div>
  );
};
