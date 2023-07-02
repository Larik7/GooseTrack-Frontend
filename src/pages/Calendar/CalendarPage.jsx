import { Outlet } from 'react-router';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { CalendarToolbar } from 'components/Calendar/CalendarToolbar';
import { ChoosedMonth } from 'pages/Calendar/ChoosedMonth/ChoosedMonth';

export const CalendarPage = ({ selectedDay, setSelectedDay }) => {
  const params = useParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div>
      <CalendarToolbar
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {!params?.currentDay && (
        <ChoosedMonth
          setCurrentDate={setCurrentDate}
          currentDate={currentDate}
          setSelectedDay={setSelectedDay}
        />
      )}
      <Outlet />
    </div>
  );
};
