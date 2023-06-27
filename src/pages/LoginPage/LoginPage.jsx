import { LoginForm } from 'components/LoginForm/LoginForm';
import { useState } from 'react';

export const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const handleSumbit = (values, { resetForm }) => {
    setLoginData(values);
    // Опрацювання форми, як у вихідному коді
    resetForm();
  };
  console.log(loginData);
  return (
    <div>
      {/* Інші елементи сторінки */}
      <LoginForm handleSumbit={handleSumbit} />
    </div>
  );
};
