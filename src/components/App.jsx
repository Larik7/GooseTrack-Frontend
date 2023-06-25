import { useState } from 'react';
import { LoginForm } from '../pages/LoginForm/LoginForm';
import { AuthSection } from '../components/AuthSection/AuthSection';

export const App = () => {
  const [open, setOpen] = useState(false);

  const toggleOpenLogin = () => {
    setOpen(!open);
  };

  console.log(open);
  return (
    // Тимчасово поки немає роутів
    <>
      <AuthSection />
      <div>
        <button onClick={toggleOpenLogin}>{open ? 'Close' : 'Open'}</button>
        {open && <LoginForm />}
      </div>
    </>
  );
};
