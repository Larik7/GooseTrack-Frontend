import { useState } from 'react';
import { LoginForm } from '../pages/LoginForm/LoginForm';
import { MainLayout } from 'pages/MainLayout/MainLayout';


export const App = () => {
  const [open, setOpen] = useState(false);
  const [openLayout, setopenLayout] = useState(false);

  const toggleOpenLogin = () => {
    setOpen(!open);
  };

  const btnLayout = () => {
    setopenLayout(!openLayout);
  };

  console.log(open);
  return (
    // Тимчасово поки немає роутів
    <div>

      <button onClick={toggleOpenLogin}>{open ? 'Close' : 'Open'}</button>
      {open && <LoginForm />}

   
      <button onClick={btnLayout}>MainLayout</button>
     {openLayout&& <MainLayout />} 
    </div>
  );
};
