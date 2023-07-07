import { Outlet } from 'react-router';
import { useParams } from 'react-router-dom';
import { useState, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CalendarToolbar } from 'components/Calendar/CalendarToolbar';
import { ChoosedMonth } from 'pages/Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from 'components/Calendar/ChoosedDay/ChoosedDay';
import { setActivedDate } from 'redux/tasks/taskReducer';

export const CalendarPage = ({ selectedDay, setSelectedDay }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    dispatch(setActivedDate(currentDate.toISOString().slice(0, 10)));
  }, [currentDate, dispatch]);
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
