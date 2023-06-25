import { Routes, Route } from 'react-router-dom';
import { LoginForm } from '../pages/LoginForm/LoginForm';
import { AuthSection } from '../components/AuthSection/AuthSection';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthSection />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/authSection" element={<button>open AuthSection</button>}></Route>
    </Routes>
  );
};
