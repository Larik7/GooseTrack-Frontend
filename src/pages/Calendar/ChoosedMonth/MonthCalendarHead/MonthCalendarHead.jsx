import css from './monthCalendarHead.module.css';

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

  return (
    <ul className={css.monthHeadList}>
      {daysArray.map((day, i) => (
        <li className={css.monthHeadItem} key={i} day={day.slice(0, 3)}>
          <h3
            className={`${css.monthHeadNamed}, ${css[day.toLowerCase()]}`}
            id={day}
          >
            {day.slice(0, 3)}
          </h3>
        </li>
      ))}
    </ul>
  );
};
