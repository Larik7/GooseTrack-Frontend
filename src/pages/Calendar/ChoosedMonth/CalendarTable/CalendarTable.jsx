import { getCalendaryFormat } from 'helpers/getCalendaryFormat';
import { nanoid } from 'nanoid';
import css from './callendarTable.module.css';
import { CallendarDayBox } from './CallendarDayBox/CalendarDayBox';

export const CalendarTable = ({
  currentDate,
  setCurrentDate,
  setSelectedDay,
}) => {
  const date = currentDate.toISOString().slice(0, 10);

  const callendaryBox = getCalendaryFormat(date);
  return (
    <div className={css.callendarContainer}>
      {callendaryBox.map(week => (
        <div className={css.weekContainer} key={nanoid()}>
          {week.map(day => (
            <CallendarDayBox
              key={nanoid()}
              date={day.day}
              month={day.month}
              disabled={day.disabled}
              currentMonth={currentDate}
              setCurrentDate={setCurrentDate}
              setSelectedDay={setSelectedDay}
              picked={
                day.day === parseInt(date.slice(8, 10), 10) &&
                day.month === date.slice(0, 7)
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};
