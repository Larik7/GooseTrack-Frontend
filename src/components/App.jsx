import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { MainLayout } from '../pages/MainLayout/MainLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentPage } from 'redux/auth/authOperation';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'helpers/RestrictedRoute';
import { PrivateRoute } from 'helpers/PrivetRoute';
import { Vortex } from 'react-loader-spinner';
import { MainPage } from 'pages/MainPage/MainPage';
import { StatisticsPage } from '../pages/StatisticsPage/StatisticsPage';
// import { CalendarPage } from '../pages/Calendar/CalendarPage';
import { Page404 } from 'pages/Page404/Page404';
import { TasksColumnsList } from './Task/TasksColumnsList/TasksColumnsList';

// import { LoginForm } from '../pages/LoginForm/LoginForm';

// import { Description } from './MainPage/Description/Description';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentPage());
  }, [dispatch]);

  return isRefreshing ? (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="vortex-wrapper"
      colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
    />
  ) : (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
        }
      />
      <Route
        path="/calendar"
        element={
          <PrivateRoute redirectTo="/login" component={<MainLayout />} />
        }
      >
        <Route index element={<TasksColumnsList />} />
        {/* <-----   CalendarPage */}
        {/* <Route path="/day/:currentDay" element={<TasksColumnsList />} /> */}
        {/* <Route path="/mouth/:currentDay" element={<TasksColumnsList />} /> */}
        <Route path="/calendar/statistics" element={<StatisticsPage />} />
        {/* <Route path="/calendar/userInfo" element={<Account/>} /> */}
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
