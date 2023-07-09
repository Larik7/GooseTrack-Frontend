import { Outlet } from 'react-router';
import { useParams } from 'react-router-dom';
import { useState, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CalendarToolbar } from 'components/Calendar/CalendarToolbar';
import { ChoosedMonth } from 'pages/Calendar/ChoosedMonth/ChoosedMonth';
import { setActivedDate } from 'redux/tasks/taskReducer';
import { selectActiveDate } from 'redux/tasks/selectors';

export const CalendarPage = ({ selectedDay, setSelectedDay }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const currentMonth = useSelector(selectActiveDate);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    if (currentDate.toISOString().slice(0, 10) === currentMonth) {
      return;
    }
    dispatch(setActivedDate(currentMonth));
  }, [currentDate, currentMonth, dispatch]);
  return (
    <div>
      <Suspense fallback={null}>
        <CalendarToolbar
          setCurrentDate={setCurrentDate}
          currentDate={currentDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        {!params.currentDay ? (
          <ChoosedMonth
            setCurrentDate={setCurrentDate}
            currentDate={currentDate}
            setSelectedDay={setSelectedDay}
          />
        ) : (
          <></>
        )}
        <Outlet />
      </Suspense>
    </div>
  );
};
