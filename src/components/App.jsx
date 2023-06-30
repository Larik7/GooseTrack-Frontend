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
// import { LoginForm } from '../pages/LoginForm/LoginForm';
// import { Description } from './MainPage/Description/Description';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentPage());
  }, [dispatch]);

  return isRefreshing ? (
    <p style={{ textAlign: 'center' }}>Loading ...</p>
  ) : (
    <Routes>
      <Route path="/" element={<AuthSection />}></Route>

      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/mainLayout" component={<LoginPage />} />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute
            redirectTo="/mainLayout"
            component={<RegisterPage />}
          />
        }
      />
      <Route
        path="/mainLayout"
        element={
          <PrivateRoute redirectTo="/login" component={<MainLayout />} />
        }
      >
        {' '}
        <Route path="userInfo" element={<UserInfo />} />
      </Route>
    </Routes>
  );
};

