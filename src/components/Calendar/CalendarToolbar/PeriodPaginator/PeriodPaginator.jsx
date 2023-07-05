import React, { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { format, isValid } from 'date-fns';
import css from './PeriodPaginator.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { parseDate } from 'helpers/parseDate';
import { enGB, eo, uk } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

const locales = { enGB, eo, uk };

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

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    if (!params.currentDay) {
      return;
    }
    const parsedDate = parseDate(selectedDay);
    navigate(`/calendar/day/${parsedDate}`);
  }, [selectedDay, navigate, params.currentDay]);

  useEffect(() => {
    if (i18n.language === 'ua') {
      setLanguage('uk');
    } else {
      setLanguage('enGB');
    }
  }, [i18n.language]);

  const monthFormat = 'LLLL y';
  const dayFormat = 'd MMM y';

  const formattedMonth = format(currentDate, monthFormat, {
    locale: locales[language],
  });

  let formattedDay = '';
  if (isValid(selectedDay)) {
    console.log('selectedDay', selectedDay);
    formattedDay = format(selectedDay, dayFormat, {
      locale: locales[language],
    });
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
