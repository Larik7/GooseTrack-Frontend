import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { MainLayout } from '../pages/MainLayout/MainLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { UserInfo } from './UserInfo/UserInfo';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Dna } from 'react-loader-spinner';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperation';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Необхідно на роути підключити RestrictedRoute, поки що вибиває помилку
  
  return (
    <>
      {isRefreshing ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <Routes>
          <Route path="/" element={<AuthSection />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          {
            <Route path="/mainLayout" element={<MainLayout />}>
              <Route path="userInfo" element={<UserInfo />} />
            </Route>
          }
        </Routes>
      )}
    </>
  );
};
