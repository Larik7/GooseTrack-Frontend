import css from './choosedMonth.module.css';
import { CalendarTable } from './CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead';
export const ChoosedMonth = () => {
  return (
    <div className={css.monthContainer}>
      <MonthCalendarHead />
      <CalendarTable />
    </div>
  );
};
