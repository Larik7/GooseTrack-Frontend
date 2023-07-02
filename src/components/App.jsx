// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { MainLayout } from '../pages/MainLayout/MainLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { UserInfo } from './UserInfo/UserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentPage } from 'redux/auth/authOperation';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'helpers/RestrictedRoute';
import { PrivateRoute } from 'helpers/PrivetRoute';
import { Vortex } from 'react-loader-spinner';
import { StatisticPage } from './StatisticPage/StatisticPage';

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
      <Route path="/" element={<AuthSection />} />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/mainLayout" component={<LoginPage />} />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
        }
      />
      <Route
        path="/mainLayout"
        element={<PrivateRoute redirectTo="/login" component={<MainLayout />} />}
        >
          <Route path="statistics" element={<StatisticPage />} />
        <Route path="userInfo" element={<UserInfo />} />
        <Route path="statistics" element={<StatisticPage />} />
      </Route>
    </Routes>
  );
};
