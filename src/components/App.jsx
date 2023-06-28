import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { MainLayout } from '../pages/MainLayout/MainLayout';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { UserInfo } from './UserInfo/UserInfo';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthSection />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      {
        <Route path="/mainLayout" element={<MainLayout />}>
          <Route path="userInfo" element={<UserInfo />}></Route>
        </Route>
      }
    </Routes>
  );
};
