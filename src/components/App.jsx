import { Routes, Route } from 'react-router-dom';
import { LoginForm } from '../pages/LoginForm/LoginForm';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { MainLayout } from '../pages/MainLayout/MainLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthSection />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/mainLayout" element={<MainLayout />}></Route>
    </Routes>
  );
};
