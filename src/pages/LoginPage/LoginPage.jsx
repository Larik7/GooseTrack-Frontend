import { LoginForm } from 'components/LoginForm/LoginForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';

export const LoginPage = () => {
  const [loginData, setLoginData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginIn = useSelector(state => state.auth.isLoggedIn);

  const handleSumbit = (values, { resetForm }) => {
    setLoginData(values);
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    if (loginIn) {
      navigate('/mainLayout');
    }
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
