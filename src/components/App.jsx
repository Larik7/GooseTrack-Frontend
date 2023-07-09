import { Routes, Route, useNavigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { MainLayout } from '../pages/MainLayout/MainLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { currentPage } from 'redux/auth/authOperation';
import { selectedError, selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from '../helpers/RestrictedRoute';
import { useValidation } from '../helpers/useValidation';
import { PrivateRoute } from '../helpers/PrivetRoute';
import { Vortex } from 'react-loader-spinner';
import { MainPage } from 'pages/MainPage/MainPage';
import { StatisticsPage } from '../pages/StatisticsPage/StatisticsPage';
import { CalendarPage } from '../pages/Calendar/CalendarPage';
import { ChoosedMonth } from '../pages/Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from '../components/Calendar/ChoosedDay/ChoosedDay';
import { Page404 } from 'pages/Page404/Page404';
import { Account } from 'pages/Account/Account';
import { resetAuth } from 'redux/auth/auth-slice';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigate = useNavigate();
  const date = useValidation();
  const [selectedDay, setSelectedDay] = useState(new Date(date));
  const isError = useSelector(selectedError);

  useEffect(() => {
    if (isError === 'Request failed with status code 401') {
      dispatch(resetAuth());
      navigate('/login');
    }
    dispatch(currentPage());
  }, [dispatch, isError, navigate]);

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
        path="/"
        element={
          <PrivateRoute redirectTo="/login" component={<MainLayout />} />
        }
      >
        <Route
          path="/calendar"
          element={
            <CalendarPage
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          }
        >
          <Route
            path="day/:currentDay"
            element={<ChoosedDay setSelectedDay={setSelectedDay} />}
          />
          <Route path="mouth/:currentDay" element={<ChoosedMonth />} />
        </Route>
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="userInfo" element={<Account />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
