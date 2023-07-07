import React from 'react';
import css from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect.module.css';
import { parseDate } from 'helpers/parseDate';
import { useParams, NavLink } from 'react-router-dom';

export const PeriodTypeSelect = ({
  setSelectedDay,
  selectedDay,
  currentDate,
  setCurrentDate,
}) => {
  const params = useParams();
  const parsedDate = parseDate(currentDate);
  return (
    <div className={css.tabs_flex}>
      <div className={css.types_tabs_container}>
        <NavLink
          className={css.types_tabs}
          to="/calendar"
          onClick={() => {
            setCurrentDate(selectedDay);
          }}
        >
          Month
        </NavLink>
        <NavLink
          className={`${css.types_tabs} ${
            window.location.pathname.includes('/day/') ? 'active' : ''
          }`}
          to={`day/${parsedDate}`}
          onClick={() => {
            setSelectedDay(currentDate);
          }}
          disabled={params.currentDay ? true : false}
        >
          Day
        </NavLink>
      </div>
    </div>
  );
};

// import React from 'react';
// import css from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect.module.css';
// import { parseDate } from 'helpers/parseDate';
// import { useParams, NavLink } from 'react-router-dom';

// export const PeriodTypeSelect = ({
//   setSelectedDay,
//   selectedDay,
//   currentDate,
//   setCurrentDate,
// }) => {
//   const params = useParams();
//   const parsedDate = parseDate(currentDate);
//   return (
//     <div className={css.tabs_flex}>
//       <div className={css.types_tabs_container}>
//       <NavLink
//            className={css.types_tabs}
//            to="/calendar"
//            end
//           onClick={() => {
//              setCurrentDate(selectedDay);
//            }}
//          >
//           Month
//           </NavLink>
//           <NavLink
//          className={`${css.types_tabs} ${
//             window.location.pathname.includes('/day/') ? 'active' : ''
//           }`}
//            to={`day/${parsedDate}`}
//            onClick={() => {
//              setSelectedDay(currentDate);
//           }}
//            disabled={params.currentDay ? true : false}
//          >
//           Day
//        </NavLink>
//       </div>
//     </div>
//   );
// };

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import css from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect.module.css';
// import { parseDate } from 'helpers/parseDate';
// import { useParams } from 'react-router-dom';

// export const PeriodTypeSelect = ({
//   setSelectedDay,
//   selectedDay,
//   currentDate,
//   setCurrentDate,
// }) => {
//   const params = useParams();
//   const parsedDate = parseDate(currentDate);
//   return (
//     <div className={css.tabs_flex}>
//       <div className={css.types_tabs_container}>
//         <NavLink
//           className={css.types_tabs}
//           to="/calendar"
//           end
//           onClick={() => {
//             setCurrentDate(selectedDay);
//           }}
//         >
//           Month
//         </NavLink>
//         <NavLink
//           className={`${css.types_tabs} ${
//             window.location.pathname.includes('/day/') ? 'active' : ''
//           }`}
//           to={`day/${parsedDate}`}
//           onClick={() => {
//             setSelectedDay(currentDate);
//           }}
//           disabled={params.currentDay ? true : false}
//         >
//           Day
//         </NavLink>
//         <NavLink
//           className={`${css.types_tabs} ${
//             window.location.pathname.includes('/day/') ? 'active' : ''
//           }`}
//           to={`day/${parsedDate}`}
//           onClick={() => {
//             if (selectedDay !== currentDate) {
//               setSelectedDay(currentDate);
//             }
//           }}
//           disabled={params.currentDay ? true : false}
//         >
//           Day
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// import React from 'react';
// import { NavLink, useLocation, useParams } from 'react-router-dom';
// import css from 'components/Calendar/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect.module.css';
// import { parseDate } from 'helpers/parseDate';

// export const PeriodTypeSelect = ({
//   setSelectedDay,
//   selectedDay,
//   currentDate,
//   setCurrentDate,
// }) => {
//   const params = useParams();
//   const location = useLocation();
//   const parsedDate = parseDate(currentDate);

//   const isDayActive = location.pathname.includes('/day/');
//   const isMonthActive = !isDayActive;

//   const handleMonthClick = () => {
//     setCurrentDate(selectedDay);
//   };

//   const handleDayClick = () => {
//     setSelectedDay(currentDate);
//   };

//   return (
//     <div className={css.tabs_flex}>
//       <div className={css.types_tabs_container}>
//         <NavLink
//           className={`${css.types_tabs} ${isMonthActive ? css.active : ''}`}
//           to="/calendar"
//           end
//           onClick={handleMonthClick}
//         >
//           Month
//         </NavLink>
//         <NavLink
//           className={`${css.types_tabs} ${isDayActive ? css.active : ''}`}
//           to={`day/${parsedDate}`}
//           onClick={handleDayClick}
//           disabled={!!params.currentDay}
//         >
//           Day
//         </NavLink>
//       </div>
//     </div>
//   );
// };
