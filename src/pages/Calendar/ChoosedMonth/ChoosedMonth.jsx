import css from './choosedMonth.module.css';
import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
export const ChoosedMonth = ({
  currentDate,
  setCurrentDate,
  setSelectedDay,
}) => {
  return (
    <div className={css.monthContainer}>
      <MonthCalendarHead />
      <CalendarTable
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        setSelectedDay={setSelectedDay}
      />
    </div>
  );
};
