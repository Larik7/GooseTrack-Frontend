import css from './choosedMonth.module.css';
import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
export const ChoosedMonth = ({ currentDate }) => {
  return (
    <div className={css.monthContainer}>
      <MonthCalendarHead />
      <CalendarTable currentDate={currentDate} />
    </div>
  );
};
