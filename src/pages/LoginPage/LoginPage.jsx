import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSumbit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <div>
      <LoginForm handleSumbit={handleSumbit} />
    </div>
  );
};
