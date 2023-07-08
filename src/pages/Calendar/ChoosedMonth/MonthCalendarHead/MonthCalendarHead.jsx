import css from './monthCalendarHead.module.css';
import { useEffect, useState } from 'react';

export const MonthCalendarHead = () => {
  const daysArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ul className={css.monthHeadList}>
      {daysArray.map((day, i) => (
        <li
          className={`${css.monthHeadItem} ${isSmallScreen ? css.smallScreen : ''}`}
          key={i}
        >
          <h3
            className={`${css.monthHeadNamed} ${css[day.toLowerCase()]}`}
            id={day}
          >
            {isSmallScreen ? day.slice(0, 1) : day.slice(0, 3)}
          </h3>
        </li>
      ))}
    </ul>
  );
};
